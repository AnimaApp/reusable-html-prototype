'use strict';

function MenuItem({ text }) {
  const [count, setCount] = React.useState(0)
  const [state, setState] = React.useState('initial')

  const ref = React.useRef(null)
  const handleClick = () => setCount(count + 1)

  const onMouseDown = () => {
    setState('pressed')
    Motion.animate(ref.current, { background: 'red', scale: 1.1 })
  }

  const onMouseUp = () => {
    setState('hover')
    Motion.animate(ref.current, { background: 'blue', scale: 1 })
  }
  
  const onMouseEnter = () => {
    console.log(ref.current.children[0])
    setState('hover')
    Motion.animate(ref.current, { background: 'blue', scale: 1 })
    Motion.animate(ref.current.children[0], { height: '120px' })
  }
  
  const onMouseLeave = () => {
    setState('initial')
    Motion.animate(ref.current, { background: 'white', scale: 1 })
    Motion.animate(ref.current.children[0], { height: '54px' })
  }

  return html`
    <article ref=${ref} className="menu-item menu-1 initial-invisible " data-state=${state}>
      <button onMouseDown=${onMouseDown} onMouseUp=${onMouseUp} onMouseEnter=${onMouseEnter} onMouseLeave=${onMouseLeave}
        className="menu-item-name syne-medium-scarpa-flow-16px container container-2" onClick=${handleClick}>
        ${text}: ${count}
      </button>
    </article>
  `
}

renderComponents(MenuItem, 'rc-menu-item')
