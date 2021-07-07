/* exported capitalize */
/* receive string
make all characters in the string lowercase
create a variable with an empty string value to hold the capitalized string
store the new lower case string to a new variable, lowercase
make a copy of the first character in lowercase and store in a new variable firstChar
make the variable in firstChar an upper case character
cut the first character from the string assigned to lowercase
append firstChar to lowercase and store this new string in capitalized
return capitalized  */

function capitalize(word) {
  var capitalized = '';
  var lowercase = word.toLowerCase();
  var firstChar = lowercase.charAt(0);
  lowercase = lowercase.slice(1);
  firstChar = firstChar.toUpperCase();
  capitalized = firstChar.concat(lowercase);
  return capitalized;

}
