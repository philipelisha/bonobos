let GererateBoard = {
	init: ()=> {

	},

	board: {
		pieces: [],
		activePiece: {
			position: [],
			color: ""
		}
	},

	updatePosition: (dir) => {
		let position = this.board.activePiece.position;
		switch( dir ) {
			case "down":
				position.map(([x,y])=>{
					return [x-1,y];
				});

			case "left":
				position.map(([x,y])=>{
					return [x,y+1];
				});

			case "right":
				position.map(([x,y])=>{
					return [x,y-1];
				});
		}

		this.board.activePiece = position;
	},

	createPiece: (pos, clr) => {
		let newPiece = {
			position: pos,
			color: clr
		};

		return newPiece;
	}
}

let newGame = Object.create(GererateBoard);