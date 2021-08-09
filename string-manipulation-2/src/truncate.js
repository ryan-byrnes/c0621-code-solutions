/* exported truncate */
/* receive string and length arguments
create new variable with value "..."
create new variable with empty string value
remove all characters up to the length index and place in the empty string variable
concatenate with the variable with the string value '...' and assign to one of the variables.
*/
function truncate(length, string) {
  var ellipsis = '...';
  var truncated = string.slice(0, length);
  truncated = truncated.concat(ellipsis);
  return truncated;
}
