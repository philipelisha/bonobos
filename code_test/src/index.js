import { GenerateTheOutPut } from "./components/GenerateTheOutPut";

/*
 * Log the output to the element
 */
const element = document.getElementById('root');
export const logTheOutput = (el) => {
	const outPut = GenerateTheOutPut();
	el.appendChild(outPut);
}

/*
 * Log the output
 */
logTheOutput(
	element
);
