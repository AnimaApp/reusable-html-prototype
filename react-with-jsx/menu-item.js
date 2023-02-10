'use strict';

const menuItemSelectors = document.querySelectorAll('[data-component-id="menu-item"]')

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


document.addEventListener('DOMContentLoaded', () => {
  menuItemSelectors.forEach(el => {
    const props = getElProps(el)
    const root = ReactDOM.createRoot(el);
    root.render(e(MenuItem, props));
  })
})
