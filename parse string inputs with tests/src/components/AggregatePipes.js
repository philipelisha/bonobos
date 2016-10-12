import * as Parsers from "./ParsingFunctions";
import * as Constants from "./Constants";
import { FormatDate } from "./FormatDate";

/*
 * Aggregating function
 */
export const AggregatePipes = (string) => {
	let separatedArray = Parsers.separateByLineBreak(string).map(Parsers.separateByPipe);
	separatedArray.map((r) => {
		r.splice(Constants.indexOfMiddleInitial, 1);
		let theColor = r.splice(Constants.indexOfColor, 1);
		r.push(theColor[0]);

		let gender = r[Constants.indexOfGender] === 'M' ? "Male" : "Female",
			date = FormatDate(r[Constants.indexOfDate]);
		r.splice(Constants.indexOfDate, 1, date);
		r.splice(Constants.indexOfGender, 1, gender);

		return r;
	});

	return separatedArray;
}