/* exported reverse */
/* receive array as argument
start at the last index of the array
add each element to a new array (starting from the end)
return new array */

function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
