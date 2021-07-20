/* exported drop */

function drop(array, count) {
  if (array.length < 1) {
    return array;
  }
  return array.slice(count);
}
