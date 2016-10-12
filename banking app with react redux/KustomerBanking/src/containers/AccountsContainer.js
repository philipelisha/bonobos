import { connect } from 'react-redux'
import { changeAccounts } from '../actions'
import Accounts from '../components/Accounts'

const getBalances = (accounts) => {
	let totaledAccounts = accounts.map((account) => {
		let balance = 0;
		account.history.forEach((t) => balance += t.amount)
		account.balance = parseFloat(balance).toFixed(2);

		return account;
	})

	return totaledAccounts;
}

const getTotalBalance = (accounts) => {
	let totalBalance = 0;
	accounts.forEach((account) => {
		account.history.forEach((t) => totalBalance += t.amount)
	});

	return parseFloat(totalBalance).toFixed(2);
}

const mapStateToProps = (state) => {
	return {
		accounts: getBalances(state.accounts),
		totalBalance: getTotalBalance(state.accounts),
		selectedAccountId: state.selectedAccountId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		select: (id) => {
			dispatch(changeAccounts(id))
		}
	}
}

const AccountsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Accounts)

export default AccountsContainer;