import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  render() {
    return (
		<div className="ui container">
			<h3 className="ui left bank-logo">KUSTOMER BANK</h3>
			<div className="right menu">
	      		<div className="item">
		      		<div className="ui icon input">
		        		<input type="text" placeholder="Search..." />
		       			<i className="fa fa-search link icon"></i>
		      		</div>
    			</div>
		      	<div className="ui dropdown icon item">
		      		<i className="fa fa-user icon"></i>
			      	<div className="menu">
				      	<div className="item">Account Information</div>
				      	<div className="divider"></div>
				      	<div className="item">Profile Settings</div>
				      	<div className="divider"></div>
				      	<div className="item">Help</div>
			      	</div>
		      	</div>
		      	<div className="ui item">Log out</div>
	      	</div>
      	</div>
    );
  }
}

export default Header;
