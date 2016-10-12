import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions'
import AccountBalance from '../components/AccountBalance'

const getBalances = (accounts, activeId) => {
	const activeAccount = accounts.filter((a)=> a.id === activeId)
	let totaledAccount = activeAccount.map((account) => {
		let balance = 0;
		account.history.forEach((t) => balance += t.amount)
		account.balance = parseFloat(balance).toFixed(2);

		return account;
	})

	return totaledAccount[0];
}

const mapStateToProps = (state) => {
	return {
		account: getBalances(state.accounts, state.selectedAccountId),
		accounts: state.accounts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		submitDeposit: (transactionData) => {
			dispatch(deposit(transactionData))
		},
		submitWithdraw: (transactionData) => {
			dispatch(withdraw(transactionData))
		}
	}
}

const AccountBalanceContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AccountBalance)

export default AccountBalanceContainer;