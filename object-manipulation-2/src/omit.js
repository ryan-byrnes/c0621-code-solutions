/* exported omit */
/* loop through keys in object
if keys is not included in source, add to new object
return new object */

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {

    if (keys.indexOf(key) === -1) {
      newObject[key] = source[key];
    }

  }
  return newObject;
}
