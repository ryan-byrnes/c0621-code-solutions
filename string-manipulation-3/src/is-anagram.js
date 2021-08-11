/* exported isAnagram */

function isAnagram(firstString, secondString) {
  // debugger;
  const newArray1 = [];
  const newArray2 = [];

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      newArray1.push(firstString[i]);
    }
  }
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      newArray2.push(secondString[i]);
    }
  }
  let i = 0;

  while (i < newArray1.length) {
    if (newArray1[i] === newArray2[0]) {
      newArray1.splice(i, 1);
      newArray2.splice(0, 1);
      i = 0;
    } else {
      i++;
    }
  }
  if (newArray1[0] === undefined && newArray2[0] === undefined) {
    return true;
  }
  return false;
}
