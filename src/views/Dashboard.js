import React from 'react';
import $ from 'jquery';
import FlightStatus from '../components/FlightStatus';
import ErrorMessage from '../components/ErrorMessage';
import SearchBar from '../components/SearchBar';
import axiosHelper from '../utils/axiosHelper';
import messageHelper from '../utils/messageHelper';

console.log($);

class Dashboard extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      input: '',
      flightStatus:'',
      errorMessage: '',
      isDisplayed: false
    };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
  handleSubmit(e) {
  	e.preventDefault();
  	//client side validation
  	var msg = messageHelper.messageValidation(this.state.input);
  	if(msg) { 
  		this.setState({
  			input: '',
  			isDisplayed: true,
  			errorMessage: msg
  		});
  		return;
  	}
  	//request data
  	axiosHelper.getFlightInfo(this.state.input)
  	.then(function(data){
  		this.setState({
  			isDisplayed: false,
	      flightStatus: data.flightStatus
  		});
  	}.bind(this));
  }

  handleChange(e) {
  	this.setState({
  		input: e.target.value,
  		isDisplayed: false,
  		flightStatus:''
  	});
  }
  
	render () {
		return (
			<div id = "dashboard">
				<div> Flight Status Checker </div>
        <SearchBar inputValue = {this.state.input} 
         handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} />
				<FlightStatus flightStatus = {this.state.flightStatus} />
        <ErrorMessage isDisplayed = { this.state.isDisplayed }
         message = {this.state.errorMessage} />
			</div>
		);
	}
}

export default Dashboard;
