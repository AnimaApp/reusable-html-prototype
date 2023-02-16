'use strict';

function MenuItem({ text }) {
  const [count, setCount] = React.useState(0)
  const [state, setState] = React.useState('initial')

  const ref = React.useRef(null)
  const handleClick = () => setCount(count + 1)

  const framerProps = {
    whileTap: { background: 'hotpink' },
    whileHover: { scale: 1.2 }
  }

  return html`
    <article ref=${ref} className="menu-item menu-1" data-state=${state}>
      <${motion.button} ...${framerProps} className="menu-item-name syne-medium-scarpa-flow-16px container container-2"
        onClick=${handleClick}>
        ${text}: ${count}
      </${motion.button}>
    </article>
  `
}

renderComponents(MenuItem, 'rc-menu-item')
