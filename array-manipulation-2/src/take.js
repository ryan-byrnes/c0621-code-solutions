/* exported take */
/* iterate through array and push each index value to a new array until reaching count
return new array */

function take(array, count) {
  var newArray = [];
  if (array.length < 1) {
    return array;
  }
  for (var i = 0; i <= count - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
