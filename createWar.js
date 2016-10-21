'use strict';

var Player = {
	cards: [],
	field: [],
	id: null	
}

var Card = {
	value: null,
	suit: ""
}

var suits = ["hearts", "clubs", "spades", "diamonds"];

//10 = 10, 11 = jack, 12 = queen, 13 = king, 14 = ace
var deck = {
	deck: [],
	createDeck: function() {
		// console.log(this);
		for ( var i = 0, l = suits.length; i < l; i++ ) {
			for ( var ii = 2; ii < 15; ii++ ) {  // O(n ^  2)
				let suit = suits[i];
				let newCard = Object.assign(Object.create(Card), {value: ii, suit: suit});
				this.deck.push(newCard);
			}
		}
		this.deck = this.shuffle(this.deck);
	},
	shuffle: function(array) {
	    var tmp, current, top = array.length;

	    if(top) while(--top) {
	    	current = Math.floor(Math.random() * (top + 1));
	    	tmp = array[current];
	    	array[current] = array[top];
	    	array[top] = tmp;
	    }

	    return array;
	}
}

var game = {
	players: [],

	turnNumber: 0,

	createPlayer: function(cards, id) {return Object.assign(Object.create(Player), {cards: cards, id: id, field: []})}, // why do I have to explicitly define the field? 

	start: function() {
		let newDeck1 = this.deck.splice(0, Math.floor(this.deck.length / 2)),
			newDeck2 = this.deck,
			newPlayer1 = this.createPlayer(newDeck1, 1),
			newPlayer2 = this.createPlayer(newDeck2, 2);
		this.players.push(newPlayer1);
		this.players.push(newPlayer2);

		this.turn();
	},

	checkWinner: function() {
		let someoneWon = false, winner, loser;
		this.players.forEach(function(p){
			if ( p.cards.length === 52 ) {
				someoneWon = true;
				winner = p.id;
			} else if ( p.cards.length === 0 ) {
				loser = p.id;
				winner = loser === 1 ? 2 : 1;
				someoneWon = true;
			}
		})

		if ( someoneWon ) {
			console.log("Player "+ winner + " won!");
			console.log("Player "+ loser + " lost!");
		}
		return someoneWon;
	},

	turn: function() {
		this.turnNumber++;

		let gameOver = this.checkWinner();
		if ( gameOver ) {
			return;
		}

		this.players.map(function(c){
			c.field.push(c.cards.pop());
			return c;
		});

		let player1Card = this.players[0].field.pop(),
			player2Card = this.players[1].field.pop(),
			player1CardValue = player1Card.value,
			player2CardValue = player2Card.value;
			
		if ( player1CardValue === player2CardValue ) {
			console.log("Turn " + this.turnNumber + ": Player1 had: " + player1CardValue + " Player2 had: " + player2CardValue + ". WAR!");
			this.players[0].field = this.players[0].field.concat(
				[player1Card]
			);
			this.players[1].field = this.players[1].field.concat(
				[player2Card]
			);

		} else if ( player1CardValue > player2CardValue ) {
			console.log("Turn " + this.turnNumber + ": Player1 had: " + player1CardValue + " Player2 had: " + player2CardValue + ". Player1 wins!");
			let player1Cards = this.players[0].field.splice(0,this.players[0].field.length),
				player2Cards = this.players[1].field.splice(0,this.players[1].field.length);
			this.players[0].cards = this.players[0].cards.concat(
				[player1Card],
				[player2Card],
				player1Cards,
				player2Cards
			);
			
		} else if ( player2CardValue > player1CardValue ) {
			console.log("Turn " + this.turnNumber + ": Player1 had: " + player1CardValue + " Player2 had: " + player2CardValue + ". Player2 wins!");
			let player1Cards = this.players[0].field.splice(0,this.players[0].field.length),
				player2Cards = this.players[1].field.splice(0,this.players[1].field.length);
			this.players[1].cards = this.players[1].cards.concat(
				[player1Card],
				[player2Card],
				player1Cards,
				player2Cards
			);
		}

		this.turn();
	}
}

const newDeck = Object.create(deck);
newDeck.createDeck();
const newGame = Object.assign(Object.create(game), newDeck);
newGame.start();

