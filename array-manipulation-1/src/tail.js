/* exported tail */
/* receive array argument
iterate through all indices of the array
push the second to last elements into a new variable
return that variable */

function tail(array) {
  var tailArray = [];
  for (var i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
