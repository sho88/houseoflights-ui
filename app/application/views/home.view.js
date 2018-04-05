const HOLUI = require('./../core')
  , Handlebars = require('./../lib/handlebars.min')
  , HomeModel = require('./../models/home.model')
  , template = require('./../templates/home.template.html');

// -----------------------------------------------------------------------------

module.exports = HOLUI.MakeView({

  // the element that we'll be "embedding" this view in
  selector: document.querySelector('#app'),

  // the data model that this view will be using
  model: HomeModel,
  
  // the "visible" template that this view will control
  template: Handlebars.compile( template ),

  // acts like the constructor 
  initialize() {
  	this.model.on('model:update', this.render, this);
  	this.render();
  },
  
  // register the events for this view (in the template)
  events() {
  	return [
      { selector: 'form', ev: 'submit', method: ($ev) => this.onFormSubmission($ev) },
      { selector: '[name=reset]', ev: 'click', method: () => this.onFormReset() }
	  ];
	},

  // ALL events must follow "on" naming convention (prepended)
  onFormSubmission($ev) {
  	$ev.preventDefault();
  	const formElements = $ev.target.elements;

    // set multiple attributes in this way
    this.model.setAttributes([
      { name: 'username', value: formElements.namedItem('username').value },
      { name: 'name', value: formElements.namedItem('name').value },
      { name: 'type', value: formElements.namedItem('type').value }
    ], () => console.log('Model attributes changed.'));
  	console.log( this.model.getAttributes() );
  },

  onFormReset() {
    // set individual attributes this way
    this.model.setAttribute('username', '');
    this.model.setAttribute('name', '');
    this.model.setAttribute('type', this.model.getAttribute('typeOptions')[0].value);
    console.log('Form reset...');
  }
});
