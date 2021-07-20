/* exported drop */
/* slice array at count and return array */

function drop(array, count) {
  if (array.length < 1) {
    return array;
  }
  return array.slice(count);
}
