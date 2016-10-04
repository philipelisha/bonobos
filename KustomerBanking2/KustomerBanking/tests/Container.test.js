import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument,scryRenderedComponentsWithType} from 'react-addons-test-utils';
import Container from "../src/Container";
import Accounts from "../src/Accounts";
import AccountInformation from "../src/AccountInformation";

describe('Container', () => {
	it('has the accounts and account information', () => {
		const container = renderIntoDocument(<Container />);
		const accounts = scryRenderedComponentsWithType(container, <Accounts />);

		// expect(accounts).toEqual(<Accounts />)
		// expect(container.contains(<AccountInformation />)).toEqual(true);
	});
})