/* exported reverseWord */
/* receive string
take each individual character of the string and add it to the beginning of an array
join the array into a string */

function reverseWord(word) {
  var letterArray = [];
  for (var i = 0; i < word.length; i++) {
    letterArray.unshift(word[i]);
  }
  var reverse = letterArray.join('');
  return reverse;
}
