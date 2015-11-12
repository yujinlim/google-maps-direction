'use strict';

var got    = require('got');
var assert = require('assert');

var URL = 'https://maps.googleapis.com/maps/api/directions/json';

module.exports = function(options) {
  assert(options && options.origin && options.destination, 'Invalid parameters, options requires origin and destination property');
  assert(typeof(options.origin) === 'string' && typeof(options.destination) === 'string', 'Origin and destination properties only accept string');

  return got(URL, {
    query: options,
    json: true
  })
  .then(function(response) {
    var result = response.body;
    if (!result.status || result.status !== 'OK') {
      throw new Error('direction not found');
    }
    return result;
  });
};
