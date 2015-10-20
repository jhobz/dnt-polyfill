# doNotTrack polyfill

Based on [docs in mdn](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack) here is a polyfill for cross browser detection of the doNotTrack setting.

```js
var dnt = require('dnt')

dnt(window) // -> true || false
```
