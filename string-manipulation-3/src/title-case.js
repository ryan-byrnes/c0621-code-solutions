/* exported titleCase */

function titleCase(string) {
  const minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  let newString = string.split(' ');
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === 'api') {
      newString[i] = newString[i].toUpperCase();
    }
    if (newString[i].toLowerCase().includes('javascript')) {
      if (newString[i].includes(':')) {
        newString[i] = 'JavaScript:';
      } else {
        newString[i] = 'JavaScript';
      }
    }
    if (newString[i] === newString[0] || !minorWords.includes(newString[i])) {
      newString[i] = newString[i][0].toUpperCase() + newString[i].substring(1);
    }
    if (newString[i].includes(':')) {
      newString[i + 1] = newString[i + 1][0].toUpperCase() + newString[i + 1].substring(1);
    }
    if (newString[i].includes('-')) {
      let dashString = newString[i].split('-');
      dashString[1] = dashString[1][0].toUpperCase() + dashString[1].substring(1);
      dashString = dashString.join('-');
      newString[i] = dashString;
    }
  }
  newString = newString.join(' ');
  return newString;
}
