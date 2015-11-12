# Google Maps Direction API [![Build Status](https://travis-ci.org/yujinlim/google-maps-direction.svg?branch=master)](https://travis-ci.org/yujinlim/google-maps-direction)
> a simple google map direction api without requiring api key (by default)

## Install
```
npm i --save google-maps-direction
```

## Usage
```JS
var direction = require('google-maps-direction');

direction({
  origin: 'bukit damansara',
  destination: 'klcc'
})
.then(function(result){
  // return result
  //   routes: [...],
  //   geocoded_waypoints: [...],
  //   status: "OK"
});
```

## API
### direction(options)
Returns Promise object

#### options
Type: `Object`
##### origin
`Required`  
Type: `String`  
From which location
##### destination
`Required`  
Type: `String`  
To which location

for more information about parameters, please read more [here](https://developers.google.com/maps/documentation/directions/intro#RequestParameters)
