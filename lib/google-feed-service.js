var $ = require('jquery');

module.exports = function (url, success, error) {
    var options = {
        url: "http://ajax.googleapis.com/ajax/services/feed/load",
        data: {
            q: url,
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