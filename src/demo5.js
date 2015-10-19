function promiseWhichResolves() {
	var p = new Promise(function(resolve, reject) {
		setTimeout(function(){
			resolve('It worked!');
		}, 10);	
	});

	return p;
}

function promiseWhichFails() {
	var p = new Promise(function(resolve, reject) {
		setTimeout(function(){
			reject(Error('error'));
		}, 10);	
	});

	return p;
}

module.exports = {
	promiseWhichResolves: promiseWhichResolves,
	promiseWhichFails: promiseWhichFails
};