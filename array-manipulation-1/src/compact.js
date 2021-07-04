/* exported compact */
function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (/\d\D/.test(array[i]) && array[i] !== 0) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
