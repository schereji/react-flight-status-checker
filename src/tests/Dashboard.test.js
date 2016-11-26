import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Dashboard from '../views/Dashboard';
expect.extend(expectJSX);


describe('Dashboard', () => {
	it('should contain Skurt Logo', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Dashboard />);
		const actual = renderer.getRenderOutput();
		const expected = (
			<img src = "../images/logo.png"/>
		);
		expect(actual).toIncludeJSX(expected);
	});
});