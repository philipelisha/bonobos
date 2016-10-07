import { GenerateTheOutPut } from "./components/GenerateTheOutPut";

/*
 * Log the output to the element
 */
const element = document.getElementById('root');
const outPut = GenerateTheOutPut();
export const logTheOutput = (output, el) => {
	el.appendChild(outPut);
}

/*
 * Init
 */
logTheOutput(
	outPut,
	element
);
