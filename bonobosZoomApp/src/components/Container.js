import React, { Component } from 'react';
import AccountsContainer from "../containers/AccountsContainer";
import AccountInformation from "./AccountInformation";

class Container extends Component {
  render() {
    return (
		<div className="ui two column stackable grid container">
			<div className="six wide column">
				<AccountsContainer />
			</div>
			<div className="ten wide column">
				<AccountInformation />
			</div>
		</div>
    );
  }
}

export default Container;