function myFunc(foo) {
	foo.sort();
	var currentThing;
	var currentCount = 0;
	var maxCount = 0;
	var maxThing;
	for(var i = 0, l = foo.length; i < l; i++) {
		if(foo[i] === currentThing) {
			currentCount++;
		} else {
			if (currentCount > maxCount) {
				maxCount = currentCount;
				maxThing = currentThing;
			}
			currentCount = 1;
			currentThing = foo[i];
		}
	}

	return maxThing;
}

// function getModeOfArray(array) {
// 	if (array.length === 0) {
// 		return null;
// 	}

// 	var countObj = {};
// 	var maxCount = 0;
// 	var maxThing;
// 	var count;
// 	for(var i = 0, l = array.length; i < l; i++) {
// 		if (!countObj[array[i]]) {
// 			countObj[array[i]] = 0;
// 		}

// 		count = ++countObj[array[i]];
// 		if(count > maxCount) {
// 			maxCount = count;
// 			maxThing = array[i];
// 		}
// 	}
// 	return maxThing;
// }

module.exports = myFunc;
// module.exports = getModeOfArray;