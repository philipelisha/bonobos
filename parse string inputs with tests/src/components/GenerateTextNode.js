import { GenerateBreak } from "./GenerateBreak";

/*
 * Text Generator helper
 */
export const GenerateTextNode = (text,postBreak,preBreak) => {
	let element = document.createElement("div"),
		textElement = document.createTextNode(text);

	if ( preBreak ) {
		element.appendChild(GenerateBreak());
	}

	element.appendChild(textElement);
	
	if ( postBreak ) {
		element.appendChild(GenerateBreak());
	}

	return element;
}