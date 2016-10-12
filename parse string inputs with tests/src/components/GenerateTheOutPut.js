import { AggregateCombined } from "./AggregateCombined";
import { SortByGenderThenLastName } from "./SortByGenderThenLastName";
import { SortByDateThenLastName } from "./SortByDateThenLastName";
import { SortByLastNameDesc } from "./SortByLastNameDesc";
import { GenerateTextNode } from "./GenerateTextNode";
import { ReadTextFile } from "./ReadTextFile";
const commas = ReadTextFile("../comma.txt");
const spaces = ReadTextFile("../space.txt");
const pipes  = ReadTextFile("../pipe.txt");

/*
 * Generate output function
 */
export const GenerateTheOutPut = () => {
	let combinedArrays = AggregateCombined(commas, spaces, pipes),
		firstOutput = combinedArrays.slice().sort(SortByGenderThenLastName),
		secondOutput = combinedArrays.slice().sort(SortByDateThenLastName),
		thirdOutput = combinedArrays.slice().sort(SortByLastNameDesc),
		mainElement = document.createElement("div");

	mainElement.appendChild(GenerateTextNode("Output 1: ", true));

	firstOutput.forEach((o)=> {
		let theOutput = o.toString().replace(/,/g , " ");
		mainElement.appendChild(GenerateTextNode(theOutput, true));
	});

	mainElement.appendChild(GenerateTextNode("Output 2: ", true, true));

	secondOutput.forEach((o)=> {
		let theOutput = o.toString().replace(/,/g , " ");
		mainElement.appendChild(GenerateTextNode(theOutput, true));
	});

	mainElement.appendChild(GenerateTextNode("Output 3: ", true, true));

	thirdOutput.forEach((o)=> {
		let theOutput = o.toString().replace(/,/g , " ");
		mainElement.appendChild(GenerateTextNode(theOutput, true));
	});

	return mainElement;
}

