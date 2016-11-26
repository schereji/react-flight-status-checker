import React from 'react';

class ErrorMessage extends React.Component {
	render() {
		const displayed = this.props.isDisplayed;
		if(!displayed) {
			return null;
		}
		return (			
			<div className="errorMessage" tabIndex="0">
				<i className="fa fa-exclamation-circle fa-3x" aria-hidden="true"></i>
				<p> {this.props.message} </p>
			</div>
		);
	}
}

export default ErrorMessage;