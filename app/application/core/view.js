const Events = require('./events');

module.exports = {
  model: { 
    data: {}
  },
  template: '', // should use handlebars
  selector: '',
  initialize() {
    this.render();
  },
  beforeRender() {},
  render() {
    this.beforeRender();
    this.selector.innerHTML = this.template( this.model.getAttributes() );
    this.events().forEach(event => {
      this.selector
        .querySelector(event.selector)
        .addEventListener(event.ev, event.method)
    });
    this.afterRender();
  },
  afterRender() {
    this.bindModelToView();
  },
  bindModelToView() {
    const modelKeys = Object.keys(this.model.getAttributes())
    , length = modelKeys.length;

    let i = 0;
    for (i = 0; i < length; i++) {
      let model = this.selector.querySelector(`[hol-model=${modelKeys[i]}]`);
      if (model) {
        model.value = this.model.data[modelKeys[i]];
      }
    }
  },
  events() {
    return [];
  },
  setModel(model, events = {}) {
    this.model = model;
  }
}
