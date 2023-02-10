'use strict';

const menuItemSelectors = document.querySelectorAll('[data-component-id="menu-item"]')

function MenuItem({ text }) {
  const [count, setCount] = React.useState(0)

  return e(
    'article',
    { className: 'menu-item menu-1' },
    e('button', {
      className: 'menu-item-name syne-medium-scarpa-flow-16px container container-2',
      onClick: () => setCount(count + 1)
    }, `${text}: ${count}`)
  )
}


document.addEventListener('DOMContentLoaded', () => {
  menuItemSelectors.forEach(el => {
    const props = getElProps(el)
    const root = ReactDOM.createRoot(el);
    root.render(e(MenuItem, props));
  })
})
