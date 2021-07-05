/* exported compact */
/* receive an array argument
iterate through each element in that array
if the array element evaluates to truthy, push that value to a new array
return the new array */

function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }

  }
  return compactArray;
}
