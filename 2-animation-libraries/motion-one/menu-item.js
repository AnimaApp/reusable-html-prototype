'use strict';

function MenuItem({ text }) {
  const [count, setCount] = React.useState(0)

  const handleClick = () => setCount(count + 1)

  return html`
    <article className="menu-item menu-1">
      <button className="menu-item-name syne-medium-scarpa-flow-16px container container-2" onClick=${handleClick}>
        ${text}: ${count}
      </button>
    </article>
  `
}

renderComponents(MenuItem, '[data-component-id="menu-item"]')
