'use strict';

var test = require('ava');
var Promise = require('bluebird');
var proxyquire = require('proxyquire');

test('required parameters', function(t) {
  var fixture   = {
    origin: {},
    destination: {}
  };
  var direction = require('./');
  t.throws(direction, /Invalid parameters, options requires origin and destination property/);
  t.throws(direction.bind(null, fixture), /Origin and destination properties only accept string/);
  t.end();
});

test('correct url and query string passed', function(t) {
  var fixture = {
    origin: 'bukit damansara',
    destination: 'klcc'
  };
  function got(url, options) {
    t.same(url, 'https://maps.googleapis.com/maps/api/directions/json');
    t.ok(options.query);
    t.same(options.query.origin, fixture.origin);
    t.same(options.query.destination, fixture.destination);
    t.end();

    return Promise.resolve({
      body: {
        status: 'OK'
      }
    });
  }

  var direction = proxyquire('./', {
    got: got
  });

  direction(fixture);
});
