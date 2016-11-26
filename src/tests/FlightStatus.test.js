import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import FlightStatus from '../components/FlightStatus';

describe('FlightStatus display', () => {
	function RenderFlightStatus(status, cssValue) {
		const renderer = TestUtils.createRenderer();
		renderer.render(<FlightStatus flightStatus = { status } />);
		return renderer.getRenderOutput().props.className.includes(cssValue);
	}

	it('Should display className ontime when on time', () => {
		const actual = RenderFlightStatus('On Time', 'ontime');
		const expected = true;
		expect(actual).toEqual(expected);
	});

	it('Should display className delayed when delayed', () => {
		const actual = RenderFlightStatus('Delayed by 10 minute(s)','delay');
		const expected = true;
		expect(actual).toEqual(expected);
	});
});