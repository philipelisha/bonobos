import * as Constants from "./Constants";

/*
 * Sorting function
 */
export const SortByGenderThenLastName = (a, b) => {
  let comparison =0;
  if ( a[Constants.indexOfGender] > b[Constants.indexOfGender] ) {
    comparison = 1;
  }
  if ( a[Constants.indexOfGender] < b[Constants.indexOfGender] ) {
    comparison = -1;
  }
  if (comparison !== 0) {
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