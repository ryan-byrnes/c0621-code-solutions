/* exported difference */
function difference(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
