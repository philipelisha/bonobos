import React, { Component } from 'react';
import { debounce } from "../helpers/debounce";
import { getCurrentFormatedDate } from "../helpers/getCurrentDate";


class WithdrawModal extends Component {
	constructor(props) {
  		super(props);

		this.state = {
			value: "0.00"
		}

		this.changeValue = this.changeValue.bind(this);
		this.submitWithdraw = this.submitWithdraw.bind(this);
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

	submitWithdraw() {
		let negativeValue = parseFloat(this.state.value);
		negativeValue *= -1;
		let formatedDate = getCurrentFormatedDate();
		let data = {
			date: formatedDate,
			id: this.props.id,
			amount: negativeValue
		}
		this.setState({
			value: "0.00"
		});
		this.props.submitWithdraw(data);
	}

 	render() {
	    return (
			<div id="withdrawModal" className="ui modal">
				<i className="close icon"></i>
				<div className="header">
					Make a Withdrawel
				</div>
				<div className="text content">
					<p>Make a withdrawel from your {this.props.name} account.</p>
				</div>
				<div className="ui text content form">
					<div className="field">
						<label>Amount</label>
						<input type="text" onChange={this.changeValue} value={this.state.value}  />
				    </div>
				</div>
				<div className="actions">
				    <div className="ui black deny button" onClick={this.props.toggleWithdrawModal}>
				      Cancel
				    </div>
				    <div className="ui positive right button" onClick={this.submitWithdraw}>
				      Submit
				    </div>
				</div>
			</div>
	    );
  }
}

export default WithdrawModal;