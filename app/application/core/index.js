const Model = require('./model')
	, View = require('./view');

// -----------------------------------------------------------------------------

// Responsible for creating a model
const MakeModel = (data) => {
  return Object.assign({}, Model, {
    data: data
  });
};

// -----------------------------------------------------------------------------

// Responsible for creating a view
const MakeView = (properties) => {
  return Object.assign({}, View, properties);
};

// -----------------------------------------------------------------------------

module.exports = { MakeModel, MakeView };
