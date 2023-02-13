class Sidebar extends Lit.LitElement {
  static styles = Lit.css`
    :host * {
      box-sizing: border-box;
    }

    .sidebar {
      align-items: center;
      background-color: var(--white);
      display: flex;
      flex-direction: column;
      height: 900px;
      left: 0;
      padding: 45px 0;
      position: fixed;
      top: 0;
      width: 291px;
      z-index: 4;
    }

    .logo {
      align-items: flex-start;
      display: flex;
      gap: 18px;
      height: 35px;
      margin-left: 0.05px;
      margin-top: 2px;
      padding: 0px 0;
      width: 215px;
    }

    .menu {
      gap: 12px;
      margin-top: 72px;
    }

    .menu-1 {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      position: relative;
      width: 243px;
    }
  `

  render() {
    return Lit.html`
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
    `
  }
}

customElements.define('rc-sidebar', Sidebar)