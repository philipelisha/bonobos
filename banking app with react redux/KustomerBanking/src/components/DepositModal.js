import React, { Component } from 'react';
import { debounce } from "../helpers/debounce";
import { getCurrentFormatedDate } from "../helpers/getCurrentDate";

class DepositModal extends Component {
	constructor(props) {
  		super(props);

		this.state = {
			value: "0.00"
		}

		this.changeValue = this.changeValue.bind(this);
		this.submitDeposit = this.submitDeposit.bind(this);
		this.fixState = this.fixState.bind(this);

		this.textDebounce = debounce(this.fixState, 1000);
	}

	changeValue(e) {
		const value = e.target.value;
		if ( !isNaN(value) ) {
			this.setState({
				value: value
			});

			this.textDebounce();
		}	
	}

	fixState() {
		const value = parseFloat(this.state.value).toFixed(2);
		this.setState({value});
	}

	submitDeposit() {
		let formatedDate = getCurrentFormatedDate();

		let data = {
			date: formatedDate,
			id: this.props.id,
			amount: parseFloat(this.state.value)
		}
		this.setState({
			value: "0.00"
		});
		this.props.submitDeposit(data);
	}

 	render() {
	    return (
			<div id="depositModal" className="ui modal">
				<i className="close icon"></i>
				<div className="header">
					Make a Deposit
				</div>
				<div className="text content">
					<p>Make a deposit into your {this.props.name} account.</p>
				</div>
				<div className="ui text content form">
					<div className="two fields">
						<div className="field">
							<label>Amount</label>
							<input type="text" onChange={this.changeValue} value={this.state.value}  />
					    </div>
					    <div className="field">
							<label>Upload a picture of your check</label>
							<input type="file" />
					    </div>
					</div>
				</div>
				<div className="actions">
				    <div className="ui black deny button" onClick={this.props.toggleDepositModal}>
				      Cancel
				    </div>
				    <div className="ui positive right button" onClick={this.submitDeposit}>
				      Submit
				    </div>
				</div>
			</div>
	    );
  }
}

export default DepositModal;