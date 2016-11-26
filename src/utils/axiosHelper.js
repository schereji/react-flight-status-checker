'use strict';
var axios = require('axios');

function getFlightInfo(flightNumber) {
  var date = new Date();
  var flight = flightNumber.match(/[a-zA-Z]+|[0-9]+/g);
  var credentials = '?appId=XXXXXXXX&appKey=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  return axios.get('https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/'+ 
    flight[0] + '/' +
    flight[1] + '/' +
    'dep/' +
    date.getFullYear() + '/' +
    (date.getMonth() + 1) + '/' + 
    date.getDate() + '/' +
    credentials);
}

function parseData(response) {
  var results;
  if (response.flightStatuses == null || response.flightStatuses.length === 0) {
    return 'No Results Found';
  }
  //if response size is 1, don't perform reduce
  if (response.flightStatuses.length === 1) {
    results = response.flightStatuses[0];
  } else{
      //filter by flights with delay and reduce to last leg flight
      results = response.flightStatuses.filter(function(item) {
        return item.delays;
      }).reduce(function (acc, curr) {
        if (acc > curr.departureDate.dateUtc) {
          return acc;
        } else {
          return curr;
        }
      }, 0);
  }
  //if no departureGateDelay exists, then flight is on time
  if (results.delays == null || 
      results.delays.departureGateDelayMinutes == null) {
      return 'On Time';
  } else {
      return  'Delayed by ' + 
        results.delays.departureGateDelayMinutes + 
        ' minute(s)';
  }
}

var axiosHelper = {
  getFlightInfo: function (flightNumber) {
    return axios.all([getFlightInfo(flightNumber)])
      .then(function (arr) {
        return {
          flightStatus: parseData(arr[0].data)
        };
      })
      .catch(function (err) {
        return {
          flightStatus: parseData(err)
        };
      });
  }
};

export default axiosHelper;