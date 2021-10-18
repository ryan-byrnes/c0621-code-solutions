/* exported getKeys */
/* create new variable with empty array value
receive argument
iterate through object keys
push each key into the variable
return variable */

function getKeys(object) {
  var keysArray = [];
  for (var key in object) {
    keysArray.push(key);
  }
  return keysArray;
}
