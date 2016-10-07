var expect = require("expect.js");
import { FormatDate } from "../components/FormatDate";

describe('The date formatter', function() {
	it('given a date it should return a new date in the correct format', function () {
		var badFormat = "3-25-1996",
			badFormat2 = "05 15 2015",
			correctFormat2 = "5/15/2015",
			correctFormat = "3/25/1996",
			output = FormatDate(badFormat),
			output2 = FormatDate(badFormat2);

		expect(output).to.eql(correctFormat);
		expect(output2).to.eql(correctFormat2);
	});

});