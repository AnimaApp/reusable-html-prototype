'use strict';

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

renderComponents(MenuItem, '[data-component-id="menu-item"]')
