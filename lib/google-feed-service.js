var $ = require('jquery');

module.exports = function (url) {
    var options = {
        url: "http://ajax.googleapis.com/ajax/services/feed/load",
        data: {
            q: url,
            v: '1.0'
        },
        dataType: "jsonp",
        cache: true
    };
    return $.ajax(options);
};