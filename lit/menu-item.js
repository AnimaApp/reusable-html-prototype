class MenuItem extends Lit.LitElement {
  static properties = {
    text: { type: String },
    count: { type: Number, state: true }
  }

  count = 0

  static styles = Lit.css`
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

  handleClick = () => {
    this.count = this.count + 1
  }


  render() {
    return Lit.html`
      <article class="menu-item">
        <button @click=${this.handleClick} class="menu-item-name syne-medium-scarpa-flow-16px container">
          ${this.text}: ${this.count}
        </button>
      </article>
    `
  }
}

customElements.define('rc-menu-item', MenuItem)