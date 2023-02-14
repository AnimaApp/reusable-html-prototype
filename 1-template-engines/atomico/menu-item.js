
function MenuItem({ text }) {
  const [count, setCount] = Atomico.useProp("count")


  function handleClick() {
    return setCount((count) => count + 1)
  }

  return (
    Atomico.html`<host shadowDom>
  <article class="menu-item">
    <button onclick=${handleClick} class="menu-item-name syne-medium-scarpa-flow-16px container">
      ${text}: ${count}
    </button>
  </article>
</host>`
  )
}

MenuItem.props = {
  text: { type: String },
  count: { type: Number, value: 0 }
}

MenuItem.styles = Atomico.css`
:host * {
  box-sizing: border-box;
}

.menu-item {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 243px;
  border-radius: 12px;
  gap: 10px;
}

.menu-item-name {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.syne-medium-scarpa-flow-16px {
  color: var(--scarpa-flow);
  font-family: var(--font-family-syne-medium);
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 500;
}

.container {
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  display: flex;
  gap: 20px;
  height: 52px;
  padding: 0px 24px;
  position: relative;
  justify-content: center;
  width: 100%;
}
`



customElements.define('rc-menu-item', Atomico.c(MenuItem))