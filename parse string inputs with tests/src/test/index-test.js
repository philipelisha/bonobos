var expect = require("expect.js");
import { logTheOutput } from "../index";
import { GenerateTheOutPut } from "../components/GenerateTheOutPut";
import $ from "jquery";


describe('The main index function', function() {
	it('appends the out from GenerateTheOutPut to the root element', function() {
		var root = document.getElementById("root"),
			html = '<div id="test"></div>',
			output = GenerateTheOutPut();
		$('body').append(html);

		logTheOutput(output, root);
		var newRoot = $('#root'),
			newOutput = $("#test");
		newOutput.append(output);
		expect( newRoot.children() ).to.eql( newOutput.children() );
	});
});