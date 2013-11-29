
# google-feed-service


  [![Build Status](https://travis-ci.org/tomkp/google-feed-service.png)](https://travis-ci.org/tomkp/google-feed-service)



##Examples

### Symbols as an Array

```
    $.when(
        service(['LON:TSCO', 'LON:RDSA'])
    ).then(
        function (data) {}
    );
```


### Symbols as a String

```
    $.when(
        service('LON:TSCO,LON:RDSA')
    ).then(
        function (data) {}
    );
```