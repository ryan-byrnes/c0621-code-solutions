/* exported isAnagram */

function isAnagram(firstString, secondString) {
  let newString1 = '';
  let newString2 = '';

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      newString1 += firstString[i];
    }
  }
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      newString2 += secondString[i];
    }
  }
  for (let i = 0; i < newString1.length; i++) {
    if (newString2.indexOf(newString1[i]) === -1 || newString1.indexOf(newString2[i]) === -1) {
      return false;
    }
  }
  return true;
}
