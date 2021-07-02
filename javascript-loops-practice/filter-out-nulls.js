/* exported filterOutNulls */
function filterOutNulls(values) {
  var valuesArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valuesArray.push(values[i]);
    }
  }
  return valuesArray;
}
