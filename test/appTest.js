var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:3002/v1/";
var util = require("util");

describe('returns luke', function() {
    it('returns luke', function(done) {
        request.get({ url: baseUrl + 'geoip/203.192.204.211' },
            function(error, response, body) {
                var bodyObj = JSON.parse(body);
                console.log(bodyObj.country);
            		 expect(bodyObj.country).to.equal("AS");
                done();
            });
    });
});
