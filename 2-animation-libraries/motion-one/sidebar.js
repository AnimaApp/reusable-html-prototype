'use strict';

function Sidebar() {
  return html`
    <nav className="sidebar">
      <div className="logo">
        Wallgarden
      </div>
      <div className="menu menu-1">
        <${MenuItem} text="Dashboard" />
        <${MenuItem} text="NF Collection" />
        <${MenuItem} text="Swap" />
        <${MenuItem} text="Wallet" />
        <${MenuItem} text="Settings" />
      </div>
    </nav>
  `
}

renderComponents(Sidebar, 'rc-sidebar')
