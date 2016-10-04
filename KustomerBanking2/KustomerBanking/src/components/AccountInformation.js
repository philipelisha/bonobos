import React, { Component } from 'react';
import AccountBalanceContainer from "../containers/AccountBalanceContainer";
import AccountHistoryContainer from "../containers/AccountHistoryContainer";

class AccountInformation extends Component {
  render() {
    return (
		<div>
			<AccountBalanceContainer />
			<AccountHistoryContainer />
		</div>
    );
  }
}

export default AccountInformation;