import { AggregateCommas } from "./AggregateCommas";
import { AggregateSpaces } from "./AggregateSpaces";
import { AggregatePipes } from "./AggregatePipes";


/*
 * Aggregating function
 */
export const AggregateCombined = (commas, spaces, pipes) => {
	let commaArray = AggregateCommas(commas),
		spaceArray = AggregateSpaces(spaces),
		pipesArray = AggregatePipes(pipes),
		combinedArray = commaArray.concat(spaceArray, pipesArray);

	return combinedArray;
}
