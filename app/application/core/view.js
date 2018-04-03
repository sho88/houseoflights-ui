const Events = require('./events');

module.exports = {
  model: {},
  template: '', // should use handlebars
  selector: '',
  initialize() {
    this.render();
  },
  render() {
    this.selector.innerHTML = this.template( this.model.getAttributes() );
    this.events().forEach(event => {
      this.selector
        .querySelector(event.selector)
        .addEventListener(event.ev, event.method)
    });
  },
  events: Events,
  setModel(model, events = {}) {
    this.model = model;
    // invoke some settings and events etc...
    // loop through the events...
  }
}
