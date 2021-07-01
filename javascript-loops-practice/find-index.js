/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    var index = -1;
    if (array[i] === value) {
      index = i;
      break;
    }
  }
  return index;
}
