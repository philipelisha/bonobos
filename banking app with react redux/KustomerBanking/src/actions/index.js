/*
 * action types
 */

export const CHANGE_ACCOUNTS = 'CHANGE_ACCOUNTS';
export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';

/*
 * action creators
 */

export const changeAccounts = (id) => {
	return {
		type: 'CHANGE_ACCOUNTS',
		id
	}
}

export const deposit = (transactionData) => {
	return {
		type: 'DEPOSIT',
		transactionData
	}
}

export const withdraw = (transactionData) => {
	return {
		type: 'WITHDRAW',
		transactionData
	}
}