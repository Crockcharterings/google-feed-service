var assert = require('assert');
var $ = require('jquery');
var GoogleFeed = require('../lib/google-feed-service.js');

describe('Google Feed Service', function () {

    it('feed url should match', function (done) {
        var feed = new GoogleFeed('http://feeds.feedburner.com/CssTricks');
        feed.load(function (data) {
            console.info('success', data);
            assert.equal('http://feeds.feedburner.com/CssTricks', data.responseData.feed.feedUrl);
            done();
        });
    });

});