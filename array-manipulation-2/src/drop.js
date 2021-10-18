/* exported drop */
/* slice array at count
 return new array */

function drop(array, count) {
  if (array.length < 1) {
    return array;
  }
  return array.slice(count);
}
