/* exported zip */
function zip(first, second) {
  let input = first;
  const newArray = [];
  if (first.length > second.length) {
    input = second;
  }
  for (let i = 0; i < input.length; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
