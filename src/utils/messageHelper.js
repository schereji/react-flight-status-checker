'use strict';

var messageHelper = {
	messageValidation : function(input){
  	var pattern = /[ @()_~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
  	if(pattern.test(input) || input === ''){ 
  		return 'Please Enter a Valid Flight Number';
  	}
	}
}

export default messageHelper;