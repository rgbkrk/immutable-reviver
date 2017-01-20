var Immutable = require('immutable');

module.exports = function reviver(key, value) {
  if (Array.isArray(value)) {
    return Immutable.List(value)
  }

  if (typeof value === 'object') {
    return Immutable.Map(value)
  }
  return value
}
