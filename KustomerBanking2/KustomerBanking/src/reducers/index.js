import { CHANGE_ACCOUNTS, DEPOSIT, WITHDRAW } from '../actions';
import { dataStructure } from "../dataStructure";
import { combineReducers } from 'redux';

const InitialAccountId = dataStructure.selectedAccountId;

function selectedAccountId(state = InitialAccountId, action) {
	switch (action.type) {
		case CHANGE_ACCOUNTS:
			return action.id
		default:
			return state
  }
}

function accounts(state = [], action) {
	switch (action.type) {
		case DEPOSIT:
			return state.map((account) => {
				if (account.id === action.transactionData.id) {
					return Object.assign({}, account, {
						history: [
							{
								date: action.transactionData.date,
								description: "Deposit",
								amount: action.transactionData.amount,
								pending: true
							},
							...account.history
						]
					})
				}

				return account
		  	})
		case WITHDRAW:
			return state.map((account) => {
				if (account.id === action.transactionData.id) {
					return Object.assign({}, account, {
						history: [
							{
								date: action.transactionData.date,
								description: "Withdraw",
								amount: action.transactionData.amount,
								pending: false
							},
							...account.history
						]
					})
				}

				return account
		  	})
		default:
	  		return state
  }
}


const bankingApp = combineReducers({
	selectedAccountId,
	accounts
})

export default bankingApp