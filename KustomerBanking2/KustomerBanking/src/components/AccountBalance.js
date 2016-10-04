import React, { Component } from 'react';
import AccountActions from "./AccountActions";
import "./AccountBalance.css";
import NumberFormat from 'react-number-format';

class AccountBalance extends Component {
	render() {
	  	const account = this.props.account || {};
	  	const otherAccounts = this.props.accounts || [];

	    return (
			<div className="ui raised segment largeBorder accountInfo">
				<h2 className="ui left">{account.name}</h2>
				<div className="ui four column stackable grid container">
					<div className="three wide column">
						<small>Available balance</small>
						<h4 className="no-margin">
							<NumberFormat value={account.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} />
						</h4>
					</div>
				</div>
				<div className="ui section divider"></div>
				<AccountActions
					submitWithdraw={this.props.submitWithdraw}
					submitDeposit={this.props.submitDeposit}
					id={account.id}
					otherAccounts={otherAccounts}
					name={account.name} />
			</div>
	    );
  }
}

export default AccountBalance;