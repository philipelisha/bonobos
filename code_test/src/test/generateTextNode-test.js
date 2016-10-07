var expect = require("expect.js");
import { GenerateTextNode } from "../components/GenerateTextNode";
import $ from "jquery";


describe('GenerateTextNode', function() {
	it('returns an element with the text inside', function() {
		var textInput = "Testing",
		element = GenerateTextNode(textInput);

		expect( $(element).text()).to.eql(textInput);
	});

	it('puts a break element in the text element', function() {
		var textInput = "Testing",
		element = GenerateTextNode(textInput, true);

		expect( $(element).has("br").length ).to.be(1)
	});

	it('puts two break elements in the text element', function() {
		var textInput = "Testing",
		element = GenerateTextNode(textInput, true, true);

		expect( $(element).find("br").length ).to.be(2)
	});
});