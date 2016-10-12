var expect = require("expect.js");
import { GenerateTheOutPut } from "../components/GenerateTheOutPut";
import { AggregateCombined } from "../components/AggregateCombined";
import $ from "jquery";
import { commas } from "../comma";
import { spaces } from "../space";
import { pipes } from "../pipe";

describe('GenerateTheOutPut', function() {
	it('returns an element with the correct length output as its children', function() {
		var output = GenerateTheOutPut(),
			combinedArrays = AggregateCombined(commas, spaces, pipes),
			amountOfOutputs = 3,
			amountOfTitles = 3;

		expect( $(output).children().length ).to.eql( combinedArrays.length * amountOfOutputs + amountOfTitles);
	});
});