import React, {Component} from 'react';
import { Container } from "./Container";

export const App = () => {
	return (
		<div className="ui one column stackable grid">
			<div className="ui main container">
				<Container />
			</div>
		</div>
	);
}
