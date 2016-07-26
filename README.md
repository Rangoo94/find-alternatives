Find alternatives
=================

Small library to find alternatives to specified keyword.

Example:
--------

```
const findAlternatives = require('find-alternatives');
const options = [ 'create', 'delete', 'update' ];

findAlternatives('creat', options); // [ 'create' ]
findAlternatives('creajt', options); // [ 'create' ]
findAlternatives('something', options); // []
```
