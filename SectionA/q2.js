/* 
	Section A
	Question 2
	Name: Alvin Tang
	Admin No: p1234567
	Class: DIT1B02
	
*/

// Function: statvalue 
// Higher Order Function 
// Alvin: This is actually the first-class function to be used by the higher order
function sumFunc(theArray) {
	let theSum = 0;
	theSum = theArray.reduce((accum, currentValue) => accum + currentValue, theSum);
	return theSum;
}

function averageFunc(theArray) {
	let theSum = sumFunc(theArray);
	return theSum / theArray.length;
}

// TODO: Code here

function findMedian(theArray) {
	theArray.sort((a, b) => a - b);
	let theArrayIsEven = theArray.length % 2 == 0;
	let theMedian;

	if (theArrayIsEven) {
		let theHalfIndex = theArray.length / 2;
		theMedian = (theArray[theHalfIndex] + theArray[theHalfIndex + 1]) / 2;
	}
	// isOdd
	else {
		let theMidPoint = Math.floor(theArray.length / 2);
		theMedian = theArray[theMidPoint];
	}
	return theMedian;
}

function findMode(theArray) {
	let theMap = new Map();

	// create a map of the numbers, incrementing if it's more than first time.
	theArray.forEach(element => {
		if (theMap.has(element)) {
			theMap.set(element, theMap.get(element) + 1);
		}
		else {
			theMap.set(element, 1);
		}
	});

	// assume first item in the array
	let theLargestCount = theMap.get(theArray[0]);
	let theMode = theArray[0];

	theMap.forEach((count, key) => {
		if (count > theLargestCount) {
			theLargestCount = count;
			theMode = key;
		}
	})
	return theMode;
}


// Test the higher order function 
// using the following data


sum = [1, 2, 4, 3, 7, 9];
average = [1, 2, 4, 3, 7, 9];
median = [2, 4, 5, 7, 1, 8, 1];
mode = [2, 4, 6, 2, 2];


function stat_func(operation, numbers) {
	return operation(numbers);
}

console.log("Sum", stat_func(sumFunc, sum));
console.log("Average", stat_func(averageFunc, average));
console.log("Median", stat_func(findMedian, median));
console.log("Mode", stat_func(findMode, mode));