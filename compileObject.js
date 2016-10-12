'use strict';
/*
 * Given an input array like the one below, create a function to make the input look like the output.
 *
 * Input
[
	{
		city: "New York",
		state: "NY"
	},
	{
		city: "Philadelphia",
		state: "PA"
	}
]
*
* Output
{
	"NY": "New York",
	"PA": "Philadelphia"
}
*/


function parseArray(prev, curr) {
	let newObject = {},
		state = curr.state,
		city = curr.city;

	newObject[state] = city;

	return Object.assign(prev, newObject);
}

console.log([
	{
		city: "New York",
		state: "NY"
	},
	{
		city: "Philadelphia",
		state: "PA"
	},
	{
		city: "Chicago",
		state: "IL"
	},
	{
		city: "San Fransico",
		state: "CA"
	},
	{
		city: "Denver",
		state: "CO"
	},
	{
		city: "Boston",
		state: "MA"
	},
	{
		city: "Miami",
		state: "FL"
	}
].reduce(parseArray, {}));
