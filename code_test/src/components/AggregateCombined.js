import { AggregateCommas } from "./AggregateCommas";
import { AggregateSpaces } from "./AggregateSpaces";
import { AggregatePipes } from "./AggregatePipes";
import { commas } from "../comma";
import { spaces } from "../space";
import { pipes } from "../pipe";

/*
 * Aggregating function
 */
export const AggregateCombined = () => {
	let commaArray = AggregateCommas(commas),
		spaceArray = AggregateSpaces(spaces),
		pipesArray = AggregatePipes(pipes),
		combinedArray = commaArray.concat(spaceArray, pipesArray);

	return combinedArray;
}
