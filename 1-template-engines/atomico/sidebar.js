function Sidebar() {
  return Atomico.html`<host>
  <nav class="sidebar">
    <div class="logo">
      Wallgarden
    </div>
    <div class="menu menu-1">
      <rc-menu-item text="Dashboard"></rc-menu-item>
      <rc-menu-item text="NF Collection"></rc-menu-item>
      <rc-menu-item text="Swap"></rc-menu-item>
      <rc-menu-item text="Wallet"></rc-menu-item>
      <rc-menu-item text="Settings"></rc-menu-item>
    </div>
  </nav>
</host>`
}

customElements.define('rc-sidebar', Atomico.c(Sidebar))