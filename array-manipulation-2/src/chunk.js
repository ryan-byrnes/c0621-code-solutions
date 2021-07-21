/* exported chunk */
function chunk(array, size) {
  var chunkArray = [];
  for (var i = 0; i < array.length; i += size) {
    chunkArray.push(array.slice(i, i + size));
  }
  return chunkArray;
}
