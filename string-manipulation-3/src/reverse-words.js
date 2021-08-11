/* exported reverseWords */

const reverseWords = string => {
  const splitString = string.split(' ');
  const reverseWordsArray = [];
  let reverseWordString = '';

  for (let i = 0; i < splitString.length; i++) {
    reverseWordString = splitString[i].reverse();
    reverseWordsArray.push(reverseWordString);
  }
  return reverseWordsArray.join();

};
