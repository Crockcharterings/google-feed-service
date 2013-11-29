
#Examples

## Symbols as an Array

```
    $.when(
        service(['LON:TSCO', 'LON:RDSA'])
    ).then(
        function (data) {}
    );
```


## Symbols as a String

```
    $.when(
        service('LON:TSCO,LON:RDSA')
    ).then(
        function (data) {}
    );
```