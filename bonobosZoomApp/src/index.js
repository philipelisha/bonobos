import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import "./Index.css";
import { screenResize } from "./actions"
import { App } from './components/App';
import { store } from "./stores";

window.addEventListener('resize', () => {
    store.dispatch(screenResize(window.innerWidth, window.innerHeight));
});

render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
