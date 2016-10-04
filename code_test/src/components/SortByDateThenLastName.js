import * as Constants from "./Constants";

/*
 * Sorting function
 */
export const SortByDateThenLastName = (a, b) => {
	let comparison = new Date(a[Constants.indexOfDate]).getTime() - new Date(b[Constants.indexOfDate]).getTime();

	if ( comparison !== 0 ) {
		return comparison;
	}

	if ( a[Constants.indexOfLastName] > b[Constants.indexOfLastName] ) {
		comparison = 1;
	}
	if ( a[Constants.indexOfLastName] < b[Constants.indexOfLastName] ) {
		comparison = -1;
	}

	return comparison;
}