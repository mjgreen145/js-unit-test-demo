function asyncFunction(callback) {
	// Do some stuff

	setTimeout(function() {
		callback(null, {
			foo: 'bar'
		});
	}, 10);
	
}

module.exports = asyncFunction;