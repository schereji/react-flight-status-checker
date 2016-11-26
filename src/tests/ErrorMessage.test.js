import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import ErrorMessage from '../components/ErrorMessage';
expect.extend(expectJSX);

describe('Error Message isDisplayed Flag', () => {
	function renderErrorMessage(display) {
		const renderer = TestUtils.createRenderer();
		renderer.render(<ErrorMessage isDisplayed = { display }
			message = {'Please Enter a Valid Flight Number'} />);
		return renderer.getRenderOutput();		
	};

	it('should not display error message when false', () => {
		const actual = renderErrorMessage(false);
		expect(actual).toEqual(null);
	});

	it('should display error message when true', () => {
		const actual = renderErrorMessage(true);
		const expected = <p> Please Enter a Valid Flight Number </p>;
		expect(actual).toIncludeJSX(expected);
	});	
});

describe('ErrorMessage ClassName', () => {
	it('should be included in ErrorMessage tag', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(
			<ErrorMessage isDisplayed = { true } 
			 message = {'Test Error String'} />
		);
		const actual = renderer.getRenderOutput().
			props.className.includes('errorMessage');
		const expected = true;
		expect(actual).toEqual(expected);
	});
});

