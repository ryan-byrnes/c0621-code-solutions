/* exported toObject */
/* receive key value pair array argument
create new variable and assign empty object
set array first index variable as the objects property
assign second index variable as object value
return object */

function toObject(keyValuePairs) {
  var newObject = {};
  newObject[keyValuePairs[0]] = keyValuePairs[1];
  return newObject;
}
