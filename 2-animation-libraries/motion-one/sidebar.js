'use strict';

function Sidebar() {
  const [count, setCount] = React.useState(0)

  const handleClick = () => setCount(count + 1)

  return html`
    <nav className="sidebar">
      <div className="logo">
        Wallgarden
      </div>
      <div className="menu menu-1">
        <button onClick=${handleClick}>Bleh</button>
        <${MenuItem} text="Dashboard: ${count}" />
        <${MenuItem} text="NF Collection" />
        <${MenuItem} text="Swap" />
        <${MenuItem} text="Wallet" />
        <${MenuItem} text="Settings" />
      </div>
    </nav>
  `
}

renderComponents(Sidebar, 'rc-sidebar')
