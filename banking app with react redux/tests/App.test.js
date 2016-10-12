import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../src/App';
import Header from "../src/Header";
import Container from "../src/Container";


describe('App', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	});

	it('has the header and container', () => {
		const app = shallow(<App />);
  		const header = <Header />
  		const container = <Container />
		expect(app.contains(header)).toEqual(true);
		expect(app.contains(container)).toEqual(true);
	});
});

