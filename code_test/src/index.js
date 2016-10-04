'use strict'

import { AggregateCombined } from "./components/AggregateCombined";
import { SortByGenderThenLastName } from "./components/SortByGenderThenLastName";
import { SortByDateThenLastName } from "./components/SortByDateThenLastName";
import { SortByLastNameDesc } from "./components/SortByLastNameDesc";

/*
 * Generate output function
 */
export const logTheOutput = () => {
	let combinedArrays = AggregateCombined(),
		firstOutput = combinedArrays.slice().sort(SortByGenderThenLastName),
		secondOutput = combinedArrays.slice().sort(SortByDateThenLastName),
		thirdOutput = combinedArrays.slice().sort(SortByLastNameDesc);

	const element = document.getElementById('root');
	const outPut = "Output 1:\n" + firstOutput + "\n" + "Output 2:\n" + secondOutput + "\n" + "Output 3:\n" + thirdOutput;
	element.innerHTML = outPut;
}


/*
 * Log the output
 */
logTheOutput();
