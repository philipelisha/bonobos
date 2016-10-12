import * as Parsers from "./ParsingFunctions";
import * as Constants from "./Constants";
import { FormatDate } from "./FormatDate";

/*
 * Aggregating function
 */
export const AggregateSpaces = (string) => {
	let separatedArray = Parsers.separateByLineBreak(string).map(Parsers.separateBySpace);
	separatedArray.map((r) => {
		r.splice(Constants.indexOfMiddleInitial, 1);

		let gender = r[Constants.indexOfGender] === 'M' ? "Male" : "Female",
			date = FormatDate(r[Constants.indexOfDate]);
		r.splice(Constants.indexOfDate, 1, date);
		r.splice(Constants.indexOfGender, 1, gender);

		return r;
	});

	return separatedArray;
}
