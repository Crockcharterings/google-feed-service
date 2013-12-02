var $ = require('jquery');

var GoogleFeed = function(url) {
    this.url = url;
};

GoogleFeed.prototype.load = function (success, error) {
    var options = {
        url: "http://ajax.googleapis.com/ajax/services/feed/load",
        data: {
            q: this.url,
            v: '1.0'
        },
        dataType: "jsonp",
        cache: true,
        success: success,
        error: error
    };
    $.ajax(options);
    return this;
};

module.exports = GoogleFeed;