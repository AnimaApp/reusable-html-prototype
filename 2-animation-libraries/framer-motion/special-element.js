'use strict';

function SpecialElement({ text }) {
  const [count, setCount] = React.useState(0)

  const handleClick = () => setCount(count + 1)

  return html`
    <${motion.div} className="menu-item menu-1">
      ${count === 0 ? (
        html`<${motion.div} layout className="layout-test one" layoutId="item">
          <${motion.p} layout="position" layoutId="p1">This is how to transition to</${motion.p}>
        </${motion.div}>`
      ): null}
      ${count > 0 ? (
        html`<${motion.div} layout className="layout-test two" layoutId="item">
          <${motion.p} layout="position" layoutId="p1">This is how to transition to</${motion.p}>
          <p>Two elements with different DOM structures </p>
        </${motion.div}>`
      ): null}
      <${motion.button} className="menu-item-name syne-medium-scarpa-flow-16px container container-2"
        onClick=${handleClick}>
        click me
      </${motion.button}>
    </${motion.div}>
  `
}

renderComponents(SpecialElement, 'rc-special-element')
