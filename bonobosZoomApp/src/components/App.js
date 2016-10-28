import React from 'react';
import { Container } from "./Container";

export const App = () => {
	render() {
		return (
			<div className="ui two column stackable grid">
				<div className="ui fixed inverted main menu" id="main-menu">
					<Header />
				</div>
				<div className="ui main container">
					<Container />
				</div>
			</div>
		);
	}
}
