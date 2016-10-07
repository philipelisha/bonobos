import { AggregateCombined } from "./AggregateCombined";
import { SortByGenderThenLastName } from "./SortByGenderThenLastName";
import { SortByDateThenLastName } from "./SortByDateThenLastName";
import { SortByLastNameDesc } from "./SortByLastNameDesc";
import { commas } from "../comma";
import { spaces } from "../space";
import { pipes } from "../pipe";

/*
 * Generate output function
 */
export const GenerateTheOutPut = () => {
	let combinedArrays = AggregateCombined(commas, spaces, pipes),
		firstOutput = combinedArrays.slice().sort(SortByGenderThenLastName),
		secondOutput = combinedArrays.slice().sort(SortByDateThenLastName),
		thirdOutput = combinedArrays.slice().sort(SortByLastNameDesc),
		mainElement = document.createElement("div");

	mainElement.appendChild(document.createTextNode("Output 1: "));
	mainElement.appendChild(document.createElement("br"));

	firstOutput.forEach((o)=> {
		let theOutput = o.toString().replace(/,/g , " "),
			recordElement = document.createTextNode(theOutput);
		mainElement.appendChild(recordElement);
		mainElement.appendChild(document.createElement("br"));
	});

	mainElement.appendChild(document.createElement("br"));
	mainElement.appendChild(document.createTextNode("Output 2: "));
	mainElement.appendChild(document.createElement("br"));

	secondOutput.forEach((o)=> {
		let theOutput = o.toString().replace(/,/g , " "),
		recordElement = document.createTextNode(theOutput);
		mainElement.appendChild(recordElement);
		mainElement.appendChild(document.createElement("br"));
	});

	mainElement.appendChild(document.createElement("br"));
	mainElement.appendChild(document.createTextNode("Output 3: "));
	mainElement.appendChild(document.createElement("br"));

	thirdOutput.forEach((o)=> {
		let theOutput = o.toString().replace(/,/g , " "),
		recordElement = document.createTextNode(theOutput);
		mainElement.appendChild(recordElement);
		mainElement.appendChild(document.createElement("br"));
	});
	//const outPut = "Output 1:\n" + firstOutput + "\n" + "Output 2:\n" + secondOutput + "\n" + "Output 3:\n" + thirdOutput;

	return mainElement;
}

