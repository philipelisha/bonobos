import { createStore } from 'redux';
import { App } from '../reducers';

export const store = createStore(App);

// Log the initial state
console.log(store.getState())
