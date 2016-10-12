function CreatePiece(pos, clr) {
	let newPiece = {
		position: pos,
		color: clr
	};

	return newPiece;
}

function GererateBoard() {
	this.board = {
		pieces: [],
		activePiece: {
			position: [],
			color: ""
		}
	}
}

GererateBoard.prototype.UpdatePosition(dir) {

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
}