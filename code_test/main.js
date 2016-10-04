'use strict';

/*
 * Input
 */
const spaces = "Kournikova Anna F F 6-3-1975 Red\n" +
"Hingis Martina M F 4-2-1979 Green\n" +
"Seles Monica H F 12-2-1973 Black"

const pipes = "Smith | Steve | D | M | Red | 3-3-1985\n" +
"Bonk | Radek | S | M | Green | 6-3-1975\n" +
"Bouillon | Francis | G | M | Blue | 6-3-1975"

const commas = "Abercrombie, Neil, Male, Tan, 2/13/1943\n" +
"Bishop, Timothy, Male, Yellow, 4/23/1967\n" +
"Kelly, Sue, Female, Pink, 7/12/1959"

/*
 * Index constants
 */
const indexOfMiddleInitial = 2;
const indexOfColor = 3;
const indexOfGender = 2;
const indexOfDate = 3;
const indexOfLastName = 0;

/*
 * Parsing functions
 */
const separateByLineBreak = (s) => s.split('\n');
const separateByComma = (s) => s.split(', ');
const separateBySpace = (s) => s.split(' ');
const separateByPipe = (s) => s.split(' | ');

/*
 * Sorting functions
 */
const sortByGenderThenLastName = (a, b) => {
	let comparison = 0;
	if ( a[indexOfGender] > b[indexOfGender] ) {
		comparison = 1;
	}
	if ( a[indexOfGender] < b[indexOfGender] ) {
		comparison = -1;
	}
    if (comparison !== 0) {
        return comparison;
    }

    if ( a[indexOfLastName] > b[indexOfLastName] ) {
		comparison = 1;
	}
	if ( a[indexOfLastName] < b[indexOfLastName] ) {
		comparison = -1;
	}

    return comparison;
}

const sortByLastNameDesc = (a, b) => {
	if ( a[indexOfLastName] < b[indexOfLastName] ) {
		return 1;
	}
	if ( a[indexOfLastName] > b[indexOfLastName] ) {
		return -1;
	}

	return 0;
}

const sortByDateThenLastName = (a, b) => {
	let comparison = new Date(a[indexOfDate]).getTime() - new Date(b[indexOfDate]).getTime();

	if ( comparison !== 0 ) {
        return comparison;
    }

	if ( a[indexOfLastName] > b[indexOfLastName] ) {
		comparison = 1;
	}
	if ( a[indexOfLastName] < b[indexOfLastName] ) {
		comparison = -1;
	}

    return comparison;
}

/*
 * Date formating helper
 */
const formatDate = (date) => {
	let newDate = new Date(date),
		day = newDate.getDate(),
		month = newDate.getMonth(),
		year = newDate.getFullYear(),
		formatedDate = month + "/" + day + "/" + year;

	return formatedDate;
}

/*
 * Aggregating functions
 */
const aggregateCommas = (string) => {
	let separatedArray = separateByLineBreak(string).map(separateByComma);
	separatedArray.map((r) => {
		let theColor = r.splice(indexOfColor, 1);
		r.push(theColor[0]);

		return r;
	});

	return separatedArray;
}

const aggregateSpaces = (string) => {
	let separatedArray = separateByLineBreak(string).map(separateBySpace);
	separatedArray.map((r) => {
		r.splice(indexOfMiddleInitial, 1);

		let gender = r[indexOfGender] === 'M' ? "Male" : "Female",
			date = formatDate(r[indexOfDate]);
		r.splice(indexOfDate, 1, date);
		r.splice(indexOfGender, 1, gender);

		return r;
	});

	return separatedArray;
}

const aggregatePipes = (string) => {
	let separatedArray = separateByLineBreak(string).map(separateByPipe);
	separatedArray.map((r) => {
		r.splice(indexOfMiddleInitial, 1);
		let theColor = r.splice(indexOfColor, 1);
		r.push(theColor[0]);

		let gender = r[indexOfGender] === 'M' ? "Male" : "Female",
			date = formatDate(r[indexOfDate]);
		r.splice(indexOfDate, 1, date);
		r.splice(indexOfGender, 1, gender);

		return r;
	});

	return separatedArray;
}

/*
 * Combine arrays function
 */
const combineArrays = () => {
	let commaArray = aggregateCommas(commas),
		spaceArray = aggregateSpaces(spaces),
		pipesArray = aggregatePipes(pipes),
		combinedArray = commaArray.concat(spaceArray).concat(pipesArray);
  
	return combinedArray;
}

/*
 * Generate output function
 */
const logTheOutput = () => {
	let combinedArrays = combineArrays(),
		firstOutput = combinedArrays.slice().sort(sortByGenderThenLastName),
		secondOutput = combinedArrays.slice().sort(sortByDateThenLastName),
		thirdOutput = combinedArrays.slice().sort(sortByLastNameDesc);
	

	console.log("Output 1: ", firstOutput);
	console.log("Output 2: ", secondOutput);
	console.log("Output 3: ", thirdOutput);
}


/*
 * Log the output
 */
logTheOutput();
