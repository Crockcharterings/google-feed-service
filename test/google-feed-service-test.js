var assert = require('assert');
var $ = require('jquery');
var service = require('../lib/google-feed-service.js');

describe('Google Feed Service', function () {

    it('feed url should match', function (done) {
        service('http://feeds.feedburner.com/CssTricks', function (data) {
            console.info('success', data);
            assert.equal('http://feeds.feedburner.com/CssTricks', data.responseData.feed.feedUrl);
            done();
        });
    });

});