import React, { Component } from 'react';
import Header from "./Header";
import Container from "./Container";

class App extends Component {
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

export default App;
