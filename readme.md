
# google-feed-service

    Simple browser-friendly micro service for the google feed api

  [![Build Status](https://travis-ci.org/tomkp/google-feed-service.png)](https://travis-ci.org/tomkp/google-feed-service)


### Example


```
    var googleFeed = require('google-feed-service');
    googleFeed('http://feeds.feedburner.com/CssTricks',
        function (data) {
            /* success */
        },
        function (data) {
            /* error */
        });
```