'use strict';

const menuItemSelectors = document.querySelectorAll('[data-component-id="menu-item"]')

class MenuItem extends preact.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return html`
    <article className="menu-item menu-1">
      <button className="menu-item-name syne-medium-scarpa-flow-16px container container-2" onClick=${this.handleClick}>
        ${this.props.text}: ${this.state.count}
      </button>
    </article>
    `
  }
}


document.addEventListener('DOMContentLoaded', () => {
  menuItemSelectors.forEach(el => {
    const props = getElProps(el)

    preact.render
    const root = ReactDOM.createRoot(el);
    root.render(e(MenuItem, props));
  })
})
