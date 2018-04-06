const HOLUI = require('./../core')
  , Handlebars = require('./../lib/handlebars.min')
  , TestModel = require('./../models/test.model')
  , template = require('./../templates/test.template.html');

// -----------------------------------------------------------------------------

module.exports = HOLUI.MakeView({
  selector: document.querySelector('#app'),
  model: TestModel,
  template: Handlebars.compile(template),

  initialize () {
    this.model.on('model:add', () => this.render);
    this.model.on('model:update', () => this.render);
    this.render();
  },

  events () {
    return [
      { selector: 'form', ev: 'submit', method: ($ev) => this.onFormSubmission($ev) }
    ]
  },

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
