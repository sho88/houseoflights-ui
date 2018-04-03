const HOLUI = require('./../core')
  , Handlebars = require('./../lib/handlebars.min')
  , HomeModel = require('./../models/home.model')
  , template = require('./../templates/home.template.html');

// -----------------------------------------------------------------------------

module.exports = HOLUI.MakeView({
  selector: document.querySelector('#app'),
  template: Handlebars.compile( template ),
  model: HomeModel,
  initialize() {
  	this.model.on('model:update', this.render, this);
  	this.render();
  },
  events() {
  	return [
	  	{ selector: 'button', ev: 'click', method: this.onFormSubmission.bind(this) }
	  ];
	},

  onFormSubmission($ev) {
  	$ev.preventDefault();
  	this.model.setAttribute('username', 'holuser1');
  }
});
