const HOLUI = require('./../core')
  , Handlebars = require('./../lib/handlebars.min')
  , HomeModel = require('./../models/home.model')
  , template = require('./../templates/home.template.html');

// -----------------------------------------------------------------------------

module.exports = HOLUI.MakeView({

  // the element that we'll be "embedding" this view in ------------------------
  selector: document.querySelector('#app'),

  // the data model that this view will be using -------------------------------
  model: HomeModel,
  
  // the "visible" template that this view will control ------------------------
  template: Handlebars.compile( template ),

  // acts like the constructor -------------------------------------------------
  initialize() {
  	this.model.on('model:update', this.render, this);
  	this.render();
  },
  
  // register the events for this view (in the template) -----------------------
  events() {
  	return [
	  	{ selector: 'form', ev: 'submit', method: this.onFormSubmission.bind(this) }
	  ];
	},

  // ALL events must follow "on" naming convention (prepended) -----------------
  onFormSubmission($ev) {
  	$ev.preventDefault();
  	const formElements = $ev.target.elements;
  	console.log( $ev.target );
  	this.model.setAttribute('username', formElements.namedItem('username').value);
  	this.model.setAttribute('name', formElements.namedItem('name').value);
  	this.model.setAttribute('type', formElements.namedItem('type').value);

  	console.log( this.model.getAttributes() );
  }
});
