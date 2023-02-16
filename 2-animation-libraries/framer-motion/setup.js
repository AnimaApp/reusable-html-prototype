const getElProps = (el) => {
  const props = {};

  if (el.hasAttributes()) {
    for (const attr of el.attributes) {
      props[attr.name] = attr.value;
    }
  }

  return props;
};

const renderComponents = (Component, selector) => {
  const els = document.querySelectorAll(selector);

  els.forEach((el) => {
    const props = getElProps(el);
    const root = ReactDOM.createRoot(el);
    root.render(html`<${Component} ...${props} />`);
  });
};