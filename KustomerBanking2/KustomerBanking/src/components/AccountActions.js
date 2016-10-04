import React, { Component } from 'react';
import $ from 'jquery';
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";

class AccountActions extends Component {
	constructor() {
		super();

		this.submitDeposit = this.submitDeposit.bind(this);
		this.submitWithdraw = this.submitWithdraw.bind(this);
	}

	submitDeposit(d) {
		$('#depositModal').toggle('display');
		this.props.submitDeposit(d);
	}
	
	submitWithdraw(d) {
		$('#withdrawModal').toggle('display');
		this.props.submitWithdraw(d);
	}
	
	toggleDepositModal() {
		$('#depositModal').toggle('display');
	}

	toggleWithdrawModal() {
		$('#withdrawModal').toggle('display');
	}

	render() {
	    return (
			<div className="ui three column stackable grid container">
				<div className="column">
					<button id="modalOpener" className="fluid ui button" onClick={this.toggleDepositModal}>Deposit</button>
				</div>
				<div className="column">
					<button className="fluid ui button" onClick={this.toggleWithdrawModal}>Withdraw</button>
				</div>
				<DepositModal 
					name={this.props.name}
					id={this.props.id}
					toggleDepositModal={this.toggleDepositModal}
					submitDeposit={(d)=> this.submitDeposit(d)} />
				<WithdrawModal 
					name={this.props.name}
					id={this.props.id}
					toggleWithdrawModal={this.toggleWithdrawModal}
					submitWithdraw={(d)=> this.submitWithdraw(d)} />
			</div>
	    );
  }
}

export default AccountActions;