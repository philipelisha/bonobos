import * as Constants from "./Constants";

/*
 * Sorting function
 */
export const SortByLastNameDesc = (a, b) => {
	if ( a[Constants.indexOfLastName] < b[Constants.indexOfLastName] ) {
		return 1;
	}
	if ( a[Constants.indexOfLastName] > b[Constants.indexOfLastName] ) {
		return -1;
	}

	return 0;
}