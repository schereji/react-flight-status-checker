import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import SearchBar from '../components/SearchBar';

describe('SearchBar Icon', () => {
	function RenderSearchBar(){
		const renderer = TestUtils.createRenderer();
		renderer.render(<SearchBar inputValue = "AA100" />);
		return renderer.getRenderOutput();			
	}

	it('should render the search icon', () => {
		const actual = RenderSearchBar();
		const expected =  (
			<i className="fa fa-search fa-3x" aria-hidden="true" 
			tabIndex="0"></i>
		);
		expect(actual).toIncludeJSX(expected);
	});

	it('should render the search input field', () => {
		const actual = RenderSearchBar();
		const expected =  (
			<input type ='text' placeholder ='Search Flight...' 
			  	value = {'AA100'} onChange = {function(){}()} required/>
		);
		expect(actual).toIncludeJSX(expected);
	})
})