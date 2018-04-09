const HOLUI = require('./../core');

module.exports = HOLUI.MakeModel({
  name: 'Sho Carter-Daniel',
  username: 'sho88',
  type: 'Admin',
  typeOptions: [
  	{ label: 'Teacher', value: 'Teacher' },
  	{ label: 'Student', value: 'Student' },
  	{ label: 'Admin', value: 'Admin' },
  	{ label: 'Web Author', value: 'Web Author' }
  ]
});
