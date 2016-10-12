import { connect } from 'react-redux'
import AccountHistory from '../components/AccountHistory'

const getBalances = (accounts, activeId) => {
	const activeAccount = accounts.filter((a)=> a.id === activeId)
	
	let totaledAccount = activeAccount[0], balance = 0;
	totaledAccount.history.reverse().map((t) => {
		balance += t.amount
		t.balance = parseFloat(balance).toFixed(2);

		return t;
	});
	totaledAccount.history.reverse();

	return totaledAccount.history || [];
}

const mapStateToProps = (state) => {
	return {
		accountHistory: getBalances(state.accounts, state.selectedAccountId)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

const AccountsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AccountHistory)

export default AccountsContainer;