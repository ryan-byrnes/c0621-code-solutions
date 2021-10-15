/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first.indexOf(first[i]) !== second.indexOf(first[i])) {
      return false;
    }
  }
  return true;
}
