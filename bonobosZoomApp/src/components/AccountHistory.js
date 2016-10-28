import React, { Component } from 'react';
// import NumberFormat from 'react-number-format';

const HistoryItem = ({transaction}) => {
	// Each Account
	return (
		<tr>
			<td>{transaction.date}</td>
			<td>{transaction.description}</td>
			<td>
				{transaction.amount}
			</td>
			<td>
				{transaction.balance}
			</td>
		</tr>
	);
}


class AccountHistory extends Component {
	getHistory() {
		return this.props.accountHistory || [];
	}	
	render() {
		const historyNodes = this.getHistory().map((transaction, int) => {
			return (<HistoryItem transaction={transaction} key={int} />)
		});
	    return (
			<div className="ui segment">
				<div className="html">
					<table className="ui very basic table">
						<thead>
							<tr>
								<th>Date</th>
								<th>Description</th>
								<th>Amount</th>
								<th>Balance</th>
							</tr>
						</thead>
						<tbody>
							{historyNodes}
						</tbody>
					</table>
				</div>
				
			</div>
	    );
  }
}

export default AccountHistory;