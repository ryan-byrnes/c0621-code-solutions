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
  splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    splitString[i].toLowerCase();
    newString = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    capitalizeString.push(newString);
  }
  return capitalizeString.join(' ');

}
