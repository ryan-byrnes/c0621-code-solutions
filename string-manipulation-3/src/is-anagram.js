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
  for (let i = 0; i < newArray1.length; i++) {
    for (let k = 0; k < newArray2.length; k++) {
      if (newArray1[i] === newArray2[k]) {
        newArray1.splice(i, 1);
        newArray2.splice(k, 1);
        i = 0;
        k = 0;
      }
    }
  }
  if (newArray1[0] === undefined && newArray2[0] === undefined) {
    return true;
  }
  return false;
}
