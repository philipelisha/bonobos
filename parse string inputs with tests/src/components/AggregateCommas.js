import * as Parsers from "./ParsingFunctions";
import * as Constants from "./Constants";

/*
 * Aggregating function
 */
export const AggregateCommas = (string) => {
	let separatedArray = Parsers.separateByLineBreak(string).map(Parsers.separateByComma);
	separatedArray.map((r) => {
		let theColor = r.splice(Constants.indexOfColor, 1);
		r.push(theColor[0]);

		return r;
	});

	return separatedArray;
}