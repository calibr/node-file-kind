## Installation

`npm install file-kind`

## Usage

```js
var fileKind = require("file-kind");
console.log(fileKind("image/png")); // "image"
```

## Possible kinds

- `image`
- `video`
- `audio`
- `archive`
- `doc` - for office documents like Excel, Doc, etc.
- `file` - for other files that do not fit other categories
