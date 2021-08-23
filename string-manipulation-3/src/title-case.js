/* exported titleCase */
/*
iterate through string and capitalize the first letter of each word (first letter and first letter following a space)
slice each character we want, store it in a new var, and call toUpperCase
Add the letter back to the string
return new titlecase string
*/

function titleCase(title) {
  const minor = ['for', 'and', 'or', 'nor', 'but', 'as', 'by', 'for', 'in'];
  const words = title.split(' ');
  const newString = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();

    if (word === 'javascript') {
      word = 'JavaScript';
    }
  }
}
