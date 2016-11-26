ASSUMPTIONS:
  i.  Flight times are calculated in UTC
  ii. 'last leg flight' is defined as the highest UTC time
  ii. Delay times are based off Flight Status' departureGateDelay 
      field which can be accessed by :
        flightStatuses[i].delays.departureGateDelay
  iii. Tested on Chrome, FF, Safari, IE11 for usability and basic accessibility support


Project Structure: 

+ app/
  + environment/
    - development.js
    - production.js
  + src/
    + components/
      - ErrorMessage.js
      - FlightStatus.js
    + images/
      - logo.png
    + less/
      - _variables.less
      - app.less
    + tests/
      - Dashboard.test.js
      - ErrorMessage.test.js
      - FlightStatus.test.js
      - SearchBar.test.js
    + views/
    + models/
    + utils/
      - axiosHelper.js
      - messageHelper.js
    - Index.js
  - index.html
  - index.js
  - gulpfile.babel.js


