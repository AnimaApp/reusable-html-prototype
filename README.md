# Reusable Components in HTML

While we can create reusable components in React, there is a need to create reusable components in non-React projects. Customers have expressed a desire to generate reusable React code.

This behaviour doesn't exist in HTML, so users are unable to create a single button/card/whatever component and use instances of it across their HTML site.

To solve this problem we can use:

- a library like React, which requires a build step to transpile JSX
- a library like Lit, which can be used to generate web components without a buildstep
- native browser tools like web components, which require no additional tooling, but are a lower-level API with a higher technical barrier of entry than other solutions.

## Limitations

### Simple developer experience

We're restricted in what we can use as our clients require a way to edit the outputted code without any additional steps. Their workflow should be the following:

- Edit the HTML file locally
- Open the HTML in their web browser
- View the changes in their browser
  We cannot require them to run a build step to make their code web ready, and we cannot require that they run a local dev server to make changes.

As a result, using tools like React in the traditional way is out of the question.

This also means that we can't use other, more simple, templating languages like Nunjucks to compile components at build time.

### Internal development capacity

Our other limitation is internal developer capacity. If we cannot generate React code, then there's the issue of our team managing multiple languages to generate components. This may be less of a problem long-term, but it's important to consider what we can do now to get the initial work out of the door. As a result, extending Athena to handle a second templating language may result in larger overhead.

## Solutions

I've proposed (at the time of writing) 4 different solutions for generating components.

Note: I've also provided the amount of data transferred on load. I don't think should play too big of a part when deciding, but is useful for illustration purposes.

### React (no-JSX)

This uses React without the JSX syntax. This is to avoid adding additional libraries and runtime overhead to our code.

As a result, the output is the most unfamiliar out of all 3 options. My guess is that code output alone is enough to not warrant pursuing this option.

Library weight: 48.2kb

### React (with JSX)

This uses React with a JSX-like syntax. We can't/shouldn't use JSX due to the runtime overhead of transpiling JSX on the fly (using babel). Instead we're using a tool called `htm` which transfoms the JSX syntax into the `createElement` syntax, which React uses to Render.

It adds a small 600kb to the page-weight but allows us to produce code that's much more JSX-like.

The author, Jason Miller, describes the syntax as being ["like JSX, also Lit"](feature/improve-messaging-when-syncing).

Library weight: 49kb

### Preact (with JSX)

This uses Preact with the `htm` library. The benefit to this is approach is that Preact's bundle size is much smaller than React's.

Note: I wasn't able to get the `preact/hooks` package working while coming up with this demo. If we can get it working, then the syntax would be very similar to the previous example. If we can't then we'll need to build stateful components using the `class` syntax.

Library weight: 6.6kb

### Lit

A great long-term solution as Lit (and web components in general) are interoperable with any JavaScript framework. i.e. we can build the main component logic using web components and then just use a wrapper around the component to ensure that it works with a given framework.

Syntax is different, and we'll need to consider the Shadow DOM, and how it plays with managing a component's styles.

Library weight: 9.5kb 

### Lit (no Shadow DOM)

WIP

## Notes

Because we can't do any sort of module resolution, we'll ned to ensure that the order of imports is incorrect. If we try to access a global vriable before it's been defined then JavaScript will throw an error.

## Unknowns

### Passing through complex data down to components

Because HTML only allows string and number values to passed through as attributes we _may_ need to consider how to pass through complex data.

We can do this by using _properties_, which is done by accessing the HTML element via JavaScript, but it may cause complications if we want to provide complex data + functions to lots of different

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
