"use strict";
var node = {
	data: null,
	left: null,
	right: null,
	parent: null
}

function makeNode(data, left, right) {
	var newNode = Object.assign(Object.create(node), {
		data: data,
		left: left,
		right: right
	});

	if (newNode.left) {
		// Set this node as parent of left child
		Object.assign(newNode.left, {parent: newNode});
	}

	if (newNode.right) {
		// Set this node as parent of right child
		Object.assign(newNode.right, {parent: newNode});
	}

	return newNode;
}
//function Node() {
//	this.data = null;
//	this.parent = null;
//	this.left = null;
//	this.right = null;
//
//	return this;
//}

//function makeNode(data, left, right) {
//	var node = new Node();
//	node.data = data;
//	node.left = left;
//	node.right = right;
//
//	if (node.left) {
//		// Set this node as parent of left child
//		node.left.parent = node;
//	}
//
//	if (node.right) {
//		// Set this node as parent of right child
//		node.right.parent = node;
//	}
//
//	return node;
//}

function constructTree() {
	return makeNode(1, // root
		makeNode(2, // 3 => 3, 4, 5
			makeNode(4,
				makeNode(8, null, null),
				makeNode(9, null, null)),
			makeNode(5,
				makeNode(10, null, null),
				makeNode(11, null, null))),
		makeNode(3, // 4, 5 => 4, 5, 6, 7
			makeNode(6,
				makeNode(11.5, null, null),
				null),
			makeNode(7,
				makeNode(12, null, null),
				makeNode(13, null, null))));
}


function returnNode(node, array) {
	if ( node.data ) {
		array.push(node.data);
	}

	if ( node.left ) {
		array.concat(returnNode(node.left, array));
	}

	if ( node.right ) {
		array.concat(returnNode(node.right, array));
	}

	return array;
}

function printLevelOrder(root) {
	//console.log(root);
	var nodeArray = [];
	// finishedNodeArray = returnNode(root, nodeArray);

	nodeArray.push(root);
	var lastNode = false;

	while ( !lastNode ) {
		// [Node{2}, Node{3}]
		var newNode = nodeArray.shift() || {};
		if ( !newNode.data ) {
			lastNode = true;
		} else {
			console.log(newNode.data);
		}
		// []

		if ( newNode.left ) {
			nodeArray.push(newNode.left);
		}

		// [Node{2}]

		if ( newNode.right ) {
			nodeArray.push(newNode.right);
		}
		// [Node{2}, Node{3}]
	}
	// console.log(finishedNodeArray);


}
// O(n) 

var root1 = constructTree();
printLevelOrder(root1);
