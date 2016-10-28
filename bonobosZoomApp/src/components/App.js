import React from 'react';
import Container from "./Container";

export const App = () => {
	render() {
		return (
			<div className="ui one column stackable grid">
				<div className="ui main container">
					<Container />
				</div>
			</div>
		);
	}
};
