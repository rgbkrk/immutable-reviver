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

## Addendum again

Looks like using `fromJS` for revival is not nearly as fast as the reviver here that relies on JSON structure because fromJS is always recursive.
