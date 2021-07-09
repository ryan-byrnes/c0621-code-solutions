/* exported capitalizeWord */
/* receive string
make string lower case and assign lower case string to a new variable
remove first letter of lower case string and store in new variable
make that letter upper case
concat the upper case letter to the front of the lower case string
if lower case string is javascript, return JavaScript */

function capitalizeWord(string) {
  var lowerCase = '';
  var upperCaseLetter = '';
  var javaScript = 'JavaScript';

  if (string.toLowerCase() === 'javascript') {
    return javaScript;
  } else {
    lowerCase = string.slice(1).toLowerCase();
    upperCaseLetter = string.charAt(0).toUpperCase();
    upperCaseLetter = upperCaseLetter.concat(lowerCase);
    return upperCaseLetter;
  }

}
