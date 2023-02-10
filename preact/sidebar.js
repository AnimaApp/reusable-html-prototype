'use strict';

const sidebarSelectors = document.querySelectorAll('[data-component-id="sidebar"]');

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

document.addEventListener('DOMContentLoaded', () => {
  sidebarSelectors.forEach(el => {
    const props = getElProps(el)

    preact.render(html`<${Sidebar} ...${props} />`, el)
  })
})
