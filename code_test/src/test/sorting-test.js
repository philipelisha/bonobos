var expect = require("expect.js");
import { SortByDateThenLastName } from "../components/SortByDateThenLastName";
import { SortByGenderThenLastName } from "../components/SortByGenderThenLastName";
import { SortByLastNameDesc } from "../components/SortByLastNameDesc";
import * as Constants from "../components/Constants";

describe('The sorting functions', function() {
	describe('SortByDateThenLastName', function() {
		it('given an array with array children that have the values at the right index it should return a sorted array by date and then last name', function() {
			var input = [
				["Lee", "", "", "4/9/1984", ""],
				["Smith", "", "", "2/12/2016", ""],
				["Vivanco", "", "", "7/25/1989", ""],
				["Miller", "", "", "7/25/1989", ""]
			],
			correctOutput = [
				["Lee", "", "", "4/9/1984", ""],
				["Miller", "", "", "7/25/1989", ""],
				["Vivanco", "", "", "7/25/1989", ""],
				["Smith", "", "", "2/12/2016", ""]
			],
			output = input.sort(SortByDateThenLastName);
			expect(output[0][Constants.indexOfLastName]).to.be(correctOutput[0][Constants.indexOfLastName]);
			expect(output[1][Constants.indexOfLastName]).to.be(correctOutput[1][Constants.indexOfLastName]);
			expect(output[2][Constants.indexOfLastName]).to.be(correctOutput[2][Constants.indexOfLastName]);
			expect(output[3][Constants.indexOfLastName]).to.be(correctOutput[3][Constants.indexOfLastName]);
		});
	});

	describe('SortByGenderThenLastName', function() {
		it('given an array with array children that have the values at the right index it should return a sorted array by gender and then last name', function() {
			var input = [
					["Lee", "", "Male", "4/9/1984", ""],
					["Vivanco", "", "Female", "7/25/1989", ""],
					["Smith", "", "Male", "2/12/2016", ""],
					["Miller", "", "Female", "7/25/1989", ""]
				],
				correctOutput = [
					["Miller", "", "Female", "7/25/1989", ""],
					["Vivanco", "", "Female", "7/25/1989", ""],
					["Lee", "", "Male", "4/9/1984", ""],
					["Smith", "", "Male", "2/12/2016", ""]
				],
				output = input.sort(SortByGenderThenLastName);
			expect(output[0][Constants.indexOfLastName]).to.be(correctOutput[0][Constants.indexOfLastName]);
			expect(output[1][Constants.indexOfLastName]).to.be(correctOutput[1][Constants.indexOfLastName]);
			expect(output[2][Constants.indexOfLastName]).to.be(correctOutput[2][Constants.indexOfLastName]);
			expect(output[3][Constants.indexOfLastName]).to.be(correctOutput[3][Constants.indexOfLastName]);
		});
	});

	describe('SortByLastNameDesc', function() {
		it('given an array with array children that have the values at the right index it should return a sorted array by last name descending', function() {
			var input = [
					["Lee", "", "", "4/9/1984", ""],
					["Smith", "", "", "2/12/2016", ""],
					["Vivanco", "", "", "7/25/1989", ""],
					["Miller", "", "", "7/25/1989", ""]
				],
				correctOutput = [
					["Vivanco", "", "", "7/25/1989", ""],
					["Smith", "", "", "2/12/2016", ""],
					["Miller", "", "", "7/25/1989", ""],
					["Lee", "", "", "4/9/1984", ""]
				],
				output = input.sort(SortByLastNameDesc);
			expect(output[0][Constants.indexOfLastName]).to.be(correctOutput[0][Constants.indexOfLastName]);
			expect(output[1][Constants.indexOfLastName]).to.be(correctOutput[1][Constants.indexOfLastName]);
			expect(output[2][Constants.indexOfLastName]).to.be(correctOutput[2][Constants.indexOfLastName]);
			expect(output[3][Constants.indexOfLastName]).to.be(correctOutput[3][Constants.indexOfLastName]);
		});
	});
});