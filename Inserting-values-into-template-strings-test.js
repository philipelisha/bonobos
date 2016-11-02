//
//  Interpolate a template
//
//  Given a template string and data, produce an interpolated string.
//
//  Example Template:
//
//  "Hi! My name is {name} and I like {hobby}."
//
//  Example Data:
//

// const result = interpolate(template, data);
var merge = function( objects ) {
	var out = {};

	for ( var i = 0; i < objects.length; i++ ) {
		for ( var p in objects[i] ) {
			out[p] = objects[i][p];
		}
	}

	return out;
};
var flatten = function( obj, name, stem ) {
	var out = {};
	var newStem = (typeof stem !== 'undefined' && stem !== '') ? stem + '.' + name : name;

	if ( typeof obj !== 'object' ) {
		out[newStem] = obj;
		return out;
	}

	for ( var p in obj ) {
		var prop = flatten(obj[p], p, newStem);
		out = merge([out, prop]);
	}

	return out;
};

const template = "Hi! My name is {name} and I like {hobby}. You can reach me at {contact.phone} or {contact.email}.";
const data = {
	name: 'Nathan',
	hobby: 'tying knots',
	contact: {
		phone: '212.555.5555',
		email: 'some-dude@email.com'
	}
};

function interpolate( template, data ) {
	const keys = Object.keys(data);
	return keys.reduce(( template, k ) => template.replace(new RegExp(`{${k}}`, 'g'), data[k]), template)
}

console.log(interpolate(template, flatten(data)));