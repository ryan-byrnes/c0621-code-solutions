/* exported getValues */
/* create new variable and assign it an empty array
iterate through object properties
push values into new array
return array */

function getValues(object) {
  var valuesArray = [];
  for (var key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}
