/* exported ransomCase */
function ransomCase(string) {
  var splitString = string.split('');
  var i = 0;
  var newString = [];

  while (i < splitString.length) {
    if (i % 2 === 0) {
      newString.push(splitString[i].toLowerCase());
    } else if (i % 2 !== 0) {
      newString.push(splitString[i].toUpperCase());
    }
    i++;
  }
  return newString.join('');
}
