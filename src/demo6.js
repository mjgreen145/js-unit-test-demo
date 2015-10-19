var mySuperModule = require('./mySuperModule');

module.exports = function(name) {
	// Do some stuff, then:
	mySuperModule.doSomethingAwesome({
		name: name
	});
};
