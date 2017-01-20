# Immutable Reviver

Creates a full Immutable.js structure from a JSON string.

## Install

```
npm install immutable-reviver
```

## Usage

```js
const reviver = require('immutable-reviver');

const immObject = JSON.parse(object, reviver);
```

## Addendum

Actually, this is silly. You could just:

```js
JSON.parse(raw, (key, v) => Immutable.fromJS(v))
```
