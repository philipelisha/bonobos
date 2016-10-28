import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import "./Index.css";
import { App } from './components/App';
import { store } from "./stores";

render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
