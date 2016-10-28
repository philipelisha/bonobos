import React, { Component } from 'react';
import "./Accounts.css";
// import NumberFormat from 'react-number-format';

const Account = ({account, selectedAccountId, select}) => {
	// Each Account
	return (
		<div onClick={() => {select(account.id)}} className={account.id === selectedAccountId ? "ui raised segment" : "ui segment clickable"}>
			<h4 className="ui floated header no-margin">{account.name}</h4>
			<div className="ui clearing divider" />
			<h2 className="ui right floated header no-margin">
				{account.balance}
			</h2>
			<p className="ui right floated">Available Balance</p>
		</div>
	);
}

const AccountsList = ({accounts, selectedAccountId, select}) => {
	// Map through the accounts
	const accountNode = accounts.map((account) => {
		return (<Account account={account} key={account.id} selectedAccountId={selectedAccountId} select={select} />)
	});
	return (
		<div className="ui one column stackable">{accountNode}</div>
	);
}

class Accounts extends Component {
	getAccounts() {
		return this.props.accounts || [];
	}
	render() {
		return (
			<div className="total-accounts">
				<AccountsList selectedAccountId={this.props.selectedAccountId} accounts={this.getAccounts()} select={this.props.select} />
				<div className="ui clearing divider" />
				<div className="ui two column stackable grid">
					<div className="column">Total</div>
					<div className="column right aligned">
						{this.props.totalBalance}
					</div>
				</div>
			</div>
		);
  	}
}

export default Accounts;