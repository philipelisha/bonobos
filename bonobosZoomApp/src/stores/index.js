import { createStore } from 'redux';
import { zoomApp } from '../reducers';

export const store = createStore(zoomApp);

// Log the initial state
console.log(store.getState())