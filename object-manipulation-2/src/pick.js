/* exported pick */
/* loop through object properties
if property name matches array key value name, add that property and key to a new object
return new object */

function pick(source, keys) {
  var newObject = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i] && source[key] !== undefined) {
        newObject[keys[i]] = source[key];
      }
    }
  }
  return newObject;
}
