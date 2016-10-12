import { createStore } from 'redux';
import bankingApp from '../reducers';
import { dataStructure } from "../dataStructure";

export const store = createStore(bankingApp, dataStructure);

// Log the initial state
console.log(store.getState())
