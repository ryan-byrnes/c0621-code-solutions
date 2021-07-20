/* exported capitalizeWords */
/* split the string at any spaces
loop through the return array
set word to lower case
upper case the first letter and assign to a new variable array
join new variable array */

function capitalizeWords(string) {
  var splitString = [];
  var newString = [];
  var capitalizeString = [];
  var lowerCaseString = [];
  splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    lowerCaseString = splitString[i].toLowerCase();
    newString = lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
    capitalizeString.push(newString);
  }
  return capitalizeString.join(' ');

}
