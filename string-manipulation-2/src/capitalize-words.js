/* exported capitalizeWords */
/* split the string at any spaces
loop through the return array
set word to lower case
upper case the first letter and assign to a new variable array
join new variable array */

function capitalizeWords(string) {
  var splitString = [];
  var capitalizeString = [];
  splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    splitString[i].toLowerCase();
    splitString[i].charAt(0).toUpperCase();
    capitalizeString.push(splitString[i]);
  }
  return capitalizeString.join(' ');

}
