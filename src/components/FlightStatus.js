import React from 'react';

class FlightStatus extends React.Component {
	render() {
		const status = this.props.flightStatus;
		var statusCSS;
		status.includes('On Time') ? statusCSS = 'ontime' : statusCSS = 'delay';
		return ( 
			<div className= {'flightInfo ' + statusCSS} tabIndex="0"> 
				{this.props.flightStatus} 
			</div>
		);
	}
}

export default FlightStatus;