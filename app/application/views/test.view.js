const HOLUI = require('./../core')
  , Handlebars = require('./../lib/handlebars.min')
  , TestModel = require('./../models/test.model')
  , template = require('./../templates/test.template.html');

// -----------------------------------------------------------------------------

module.exports = HOLUI.MakeView({

  // the element that we'll be "embedding" this view in ------------------------
  selector: document.querySelector('#app'),

  // the data model that this view will be using -------------------------------
  model: TestModel,

  // the "visible" template that this view will control ------------------------
  template: Handlebars.compile(template),

  // acts like the constructor -------------------------------------------------
  initialize () {
    this.model.on('model:add', this.render, this);
    this.model.on('model:update', this.render, this);
    this.render();
  },

  // register the events for this view (in the template) -----------------------
  events () {
    return [
      // [selector] - the element that the event will be binded to
      // [ev] - the event that we will be listening out for
      // [method] - the method in this view that'll be triggered upon this event
      { selector: 'form', ev: 'submit', method: this.onFormSubmission.bind(this) }
    ]
  },

  // ALL events must follow "on" naming convention (prepended) -----------------
  onFormSubmission ($ev) {
    $ev.preventDefault();
    const email = $ev.target.elements.namedItem('email').value;
    const password = $ev.target.elements.namedItem('password').value;

    this.model.setAttribute('email', email);
    this.model.setAttribute('password', password);

    // send the data to the console...(for viewing ONLY)
    console.log( this.model.getAttributes() );
  }
});
