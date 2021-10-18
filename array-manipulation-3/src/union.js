/* exported union */
function union(first, second) {
  const concatArray = first.concat(second);
  const newArray = [...new Set(concatArray)];
  return newArray;
}
