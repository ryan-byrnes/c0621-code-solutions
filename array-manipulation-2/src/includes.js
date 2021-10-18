/* exported includes */
/* iterate through array
check to see if value at each index === value
if so, return true, else, return false */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
