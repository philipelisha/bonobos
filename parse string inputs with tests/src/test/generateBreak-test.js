var expect = require("expect.js");
import { GenerateBreak } from "../components/GenerateBreak";
import $ from "jquery";

describe('GenerateBreak', function() {
	it('returns a break element', function() {
		var expected = $("<br>"),
			output = $(GenerateBreak());

		expect ( output ).to.eql( expected );
	});
});