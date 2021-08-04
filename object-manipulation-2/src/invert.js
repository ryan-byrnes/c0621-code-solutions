/* exported invert */
/* loop through the keys in the object
key[i].value = key[i]
assign the new key value pairs to a new object
return new object */

function invert(source) {
  var newObj = {};

  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
