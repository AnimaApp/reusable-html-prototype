# RFC: Reusable Components in HTML

* https://animaapp.github.io/reusable-html-prototype/lit/index.html
* https://animaapp.github.io/reusable-html-prototype/preact/index.html
* https://animaapp.github.io/reusable-html-prototype/react-with-jsx/index.html
* https://animaapp.github.io/reusable-html-prototype/react-no-jsx/index.html

While we can create reusable components in React, there is a need to create reusable components in non-React projects. Customers have expressed a desire to generate reusable components in their HTML projects.

Reusable templates don’t exist in HTML without the use of JavaScript (in the form of web components).

Here are a few examples of ways we can generate components in HTML projects:

- React, which normally requires a build step to transpile JSX
- Lit, which can generate web components without a build step
- Vanilla web components, which require no tooling, but are a lower-level API with a higher technical barrier of entry than other solutions.

## Limitations

We have a number of limitations that will affect our approach to solving this problem:

- An end user should be able to make changes to the code without running a local server or build step.
- Managing additional languages increases internal development burden

### No local server or build step

We're restricted in what we can use as our clients require a way to edit the outputted code without any additional steps. Their workflow should be the following:

- Edit the HTML file locally
- Open the HTML in their web browser
- View the changes in their browser

We cannot require them to run a build step to make their code web ready, and we cannot require that they run a local dev server to make changes.

As a result, using tools like React in the traditional way is out of the question, as this requires both a development server AND a build step to become web ready.

We also can't use other, more simple templating languages like Nunjucks to compile components at build time.

### Internal development capacity
If we cannot generate React code, then our teams will have to manage multiple languages to generate components. The more languages we support the more effort required to implement new features and a wider surface for bugs to appear.

This may be less of a problem long-term, but it's important to consider what we can do now to get the initial work out of the door. We should consider that extending Athena to handle a second templating language may result in larger overhead.

## Solutions

I've proposed (at the time of writing) 4 different solutions for generating components. You can find the GitHub with all of the code here.

Running is very simple

- Clone the repo
- Navigate to the example directory of your choice
- Open the HTML in your browser of choice

The test I’ve done for each framework is as follows:

- I’ve used the same HTML layout for each framework, the Crypto Dashboard
- `crypto-card` is a presentational component that displays text props
- `menu-item` is an interactive component whose state changes on click
- `sidebar` is a component that renders other custom components

I hope that this is a broad enough PoC to account for the majority of scenarios we expect the components to be used.

Note: I've also provided the amount of data transferred on load. I don't think should play too big of a part when deciding, but is useful for illustration purposes.

### React (no-JSX)
React without the JSX syntax. This is to avoid adding additional libraries and runtime overhead to our code.

As a result, the output is the most unfamiliar out of all 3 options. The output is unlike any other HTML templating solution we would expect our users to write, and looks more akin to AST.

I would avoid this option, as writing React with JSX only incurs a 700b data overhead.

Library weight: 48.2kb

### React (with JSX)
React with a JSX-like syntax. We can't/shouldn't use normal JSX due to the runtime overhead of transpiling JSX on the fly, as we’d need to download and run babel. Instead we can use a package called `htm` which outputs our JSS into the `createElement` syntax, which React can use to render to the DOM.

It adds a 700b to the page-weight but allows us to produce code that's much more JSX-like. The author, Jason Miller, describes the syntax as being "like JSX, also Lit". The difference in syntax isn’t too different from regular JSX, but it’s different enough to not be a drop-in replacement.

Library weight: 49kb

### Preact (with JSX)
Preact with the `htm` library. Because ReactDOM has a bundle size of ~40kb, we can look to use a tool like Preact, which offers a very similar feature set with a vastly reduced bundle size.

Because we’re using the same `htm` library to generate our templates, the syntax is very similar to the React with JSX example.

Note: I wasn't able to get the `preact/hooks` package working while coming up with this demo. If we can get it working, then the syntax would be very similar to the previous example. If we can't then we'll need to build stateful components using the `class` syntax.

Library weight: 6.6kb

### Lit
Lit is a library that lets developers write web components in a much more simple way. One of the benefits of web components is that they’re interoperable with any JavaScript. i.e. we can build component logic using Lit and use a wrapper to ensure it works with a given framework. This should be considered when we think about long-term solutions.

There are a few key differences when it comes to using web components, which would add complexity. There are syntax difference and we'll need to consider the Shadow DOM. This affects how we write our components, as a components styles are encapsulated within the component itself.

Library weight: 9.5kb

### Lit (no Shadow DOM)
WIP

## Notes

Because we can't do any sort of module resolution, we'll need to ensure that the order of imports is correct. This could prove tricky if we’re using components in a variety of different contexts (nested within other components, circular dependencies, used in dozens places). This is likely not a problem with Lit due to the way HTML handles unregistered custom elements.

## Unknowns

Passing through complex data down to components
Because HTML only allows string and number values to passed through as attributes we may need to consider how to pass through complex data.
We can do this by using properties, which is done by accessing the HTML element via JavaScript, but it may cause complications if we want to provide complex data + functions to lots of different

## Questions

- Isn't Athena designed to handle multiple templating languages with minimal work involved?
- Since the API for the outputted code is not too different, should we use a tool that confirms more closely with web standards? This would also be an investment for the future.

## Additional notes

### Import Maps

To offer a good builder-less experience, we'll need to leverage a tool called "Import Maps". This is a modern browser features that improves the readiblity of our imports when imported code modules that are hosted on a CDN.

Currently, anyone going buildless will have to import files like this:

```
<script type="module">
  import React from 'cdn....';
</script>
```

with an import map that we can define in the root directory, and have it shared across all files, we can instead do the following

```
blah.
```

Tools like Vite and Webpack handle this out of the box when we import our modules via the node_modules folder. Previously there wasn't a way to do this without using a bundler.

An Import Map deifnes all the mappings for the modules we're using in our files.
