var expect = require("expect.js");
import * as Parsers from "../components/ParsingFunctions";


describe('The parsers', function() {
	describe('separateByLineBreak', function() {
		it('should return an array that has a length equal to one + the number line breaks', function() {
			const input = "blah\nhello\ntest",
				length = input.match(/\n/g).length + 1,
				output = Parsers.separateByLineBreak(input);
			expect( output.length ).to.be(length);
		});
	});

	describe('separateByComma', function() {
		it('should return an array of equal to the number of commas + one', function() {
			const input = "blah, hello, test",
				length = input.match(/,/g).length + 1,
				output = Parsers.separateByComma(input);
			expect( output.length ).to.be(length);
		});
	});

	describe('separateBySpace', function() {
		it('should return an array of equal to the number of spaces + one', function() {
			const input = "blah hello test",
				length = input.match(/ /g).length + 1,
				output = Parsers.separateBySpace(input);
			expect( output.length ).to.be(length);
		});
	});

	describe('separateByPipe', function() {
		it('should return an array of equal to the number of pipes + one', function() {
			const input = "blah | hello | test",
				length = input.match(/\|/g).length + 1,
				output = Parsers.separateByPipe(input);
			expect( output.length ).to.be(length);
		});
	});
});