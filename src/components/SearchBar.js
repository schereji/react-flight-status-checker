import React from 'react';

class SearchBar extends React.Component {
	render () {
		return (
			<div id="userInput">
				<form onSubmit = {this.props.handleSubmit}>
				  	<input type ='text' placeholder ='Search Flight...' 
				  	value = {this.props.inputValue} onChange = {this.props.handleChange} required/>
				  	<button type= 'submit'>
				  		<span className="visuallyHidden"> Search Flight </span>
				  		<i className="fa fa-search fa-3x" aria-hidden="true" tabIndex="0"></i>
						</button>
				</form>
			</div>
		);
	}
}


export default SearchBar;