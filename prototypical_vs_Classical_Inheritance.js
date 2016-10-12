'use strict';

//Prototypical inheritance

let animal = {
	animalType: 'animal',
	describe () {
		return `A ${this.animalType}, with ${this.furColor} fur,
			${this.legs} legs, and a ${this.tail} tail.`;
	}
};

let mouse = Object.assign(Object.create(animal), {
	animalType: 'mouse',
	furColor: 'brown',
	legs: 4,
	tail: 'long, skinny'
});

console.log(mouse.describe());


//Classical inheritance

let animal2 = function () {
	this.animalType = 'animal';
	this.describe = () => {
		return `A ${this.animalType}, with ${this.furColor} fur,
			${this.legs} legs, and a ${this.tail} tail.`;
	}
};

let mouse2 = new animal2();
mouse2.animalType = 'mouse';
mouse2.furColor = 'brown';
mouse2.legs = 4;
mouse2.tail = 'long, skinny';


console.log(mouse2.describe());