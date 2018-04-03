module.exports = (() => {

  'use strict';

  const events = {}

	const emit = (name) => {
		if (typeof events[name] === 'undefined') {
			throw name + " isn't a valid event.";
			return;
		}

		for (var i = 0; i < events[name].length; i++) {
			var scope = events[name][i].scope;
			events[name][i].func.call(scope);
		}
		return;
	}

	const on = (name, cb, scope) => {
		if (typeof events[name] === 'undefined') {
			events[name] = [];
		}

		events[name].push({ func: cb, scope: scope });
	}

	return { emit, on }

})();
