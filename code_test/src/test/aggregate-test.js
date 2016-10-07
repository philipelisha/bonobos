var expect = require("expect.js");
import { AggregateCombined } from "../components/AggregateCombined";
import { AggregateCommas } from "../components/AggregateCommas";
import { AggregatePipes } from "../components/AggregatePipes";
import { AggregateSpaces } from "../components/AggregateSpaces";
import { commas } from "../comma";
import { spaces } from "../space";
import { pipes } from "../pipe";

describe('The aggregaters', function() {
	describe('AggregateCombined', function() {
		it('generates a combined array given 3 strings in the proper format in the arguments', function() {
			var arr1 = commas,
				arr2 = spaces,
				arr3 = pipes,
				expected = [
					[ 'Abercrombie', 'Neil', 'Male', '2/13/1943', 'Tan' ],
					[ 'Bishop', 'Timothy', 'Male', '4/23/1967', 'Yellow' ],
					[ 'Kelly', 'Sue', 'Female', '7/12/1959', 'Pink' ],
					[ 'Kournikova', 'Anna', 'Female', '6/3/1975', 'Red' ],
					[ 'Hingis', 'Martina', 'Female', '4/2/1979', 'Green' ],
					[ 'Seles', 'Monica', 'Female', '12/2/1973', 'Black' ],
					[ 'Smith', 'Steve', 'Male', '3/3/1985', 'Red' ],
					[ 'Bonk', 'Radek', 'Male', '6/3/1975', 'Green' ],
					[ 'Bouillon', 'Francis', 'Male', '6/3/1975', 'Blue' ] 
				],
				output = AggregateCombined(arr1,arr2,arr3);
			expect( output ).to.eql( expected );
		});
	});

	describe('AggregateCommas', function() {
		it('generates an array given a string in the proper format in the argument', function() {
			var arr1 = commas,
				expected = [
					[ 'Abercrombie', 'Neil', 'Male', '2/13/1943', 'Tan' ],
					[ 'Bishop', 'Timothy', 'Male', '4/23/1967', 'Yellow' ],
					[ 'Kelly', 'Sue', 'Female', '7/12/1959', 'Pink' ]
				],
				output = AggregateCommas(arr1);
			expect( output ).to.eql( expected );
		});
	});

	describe('AggregatePipes', function() {
		it('generates an array given a string in the proper format in the argument', function() {
			var arr1 = pipes,
				expected = [
					[ 'Smith', 'Steve', 'Male', '3/3/1985', 'Red' ],
					[ 'Bonk', 'Radek', 'Male', '6/3/1975', 'Green' ],
					[ 'Bouillon', 'Francis', 'Male', '6/3/1975', 'Blue' ] 
				],
				output = AggregatePipes(arr1);
			expect( output ).to.eql( expected );
		});
	});

	describe('AggregateSpaces', function() {
		it('generates an array given a string in the proper format in the argument', function() {
			var arr1 = spaces,
				expected = [
					[ 'Kournikova', 'Anna', 'Female', '6/3/1975', 'Red' ],
					[ 'Hingis', 'Martina', 'Female', '4/2/1979', 'Green' ],
					[ 'Seles', 'Monica', 'Female', '12/2/1973', 'Black' ]
				],
				output = AggregateSpaces(arr1);
			expect( output ).to.eql( expected );
		});
	});
});