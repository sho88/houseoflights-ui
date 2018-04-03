const Events = require('./events');

module.exports = {
  data: {},
  hasAttribute(key) {
    return this.data.hasOwnProperty(key);
  },
  deleteAttribute(key) {
    if (!this.hasAttribute(key)) {
      throw `Model property ${key} doesn't exist.`;
    }
    delete this.data[key];
    // invoke an event "model:delete";
  },
  getAttribute(key) {
    if (!this.hasAttribute(key)) {
      throw `Model property ${key} doesn't exist.`;
    }
    return this.data[key];
  },
  setAttribute(key, value) {
    if (!this.hasAttribute(key)) {
      this.data[key] = value;
      this._events.emit('model:add');
      console.log( `invoke an event "model:add"` );
      return;
    }
    this.data[key] = value;
    this._events.emit('model:update');
    return;
  },
  getAttributes() {
    return this.data;
  },
  on(eventName, cb, scope) {
    Events.on(`${eventName}`, cb, scope);
  },
  _events: Events
 };
