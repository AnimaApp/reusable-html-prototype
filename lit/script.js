class TestEl extends Lit.LitElement {
  render() {
    return Lit.html`This is a test element`;
  }
}
customElements.define("test-el", TestEl);