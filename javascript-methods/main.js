var a = 1;
var b = 2;
var c = 3;

var maximumValue = Math.max(a, b, c);

console.log('Max Value:', maximumValue);

var heroes = ['Batman', 'Superman', 'Ironman', 'Hawkeye'];

var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Random Index Value:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'Cool Book',
    author: 'Me'
  },
  {
    title: 'Awesome Book',
    author: 'Cool Guy'
  },
  {
    title: 'Fantastic Book',
    auther: 'Fantastic Guy'
  }
];

var lastBook = library.pop();
console.log('Last Book:', lastBook);

var firstBook = library.shift();
console.log('First Book:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('Library array:', library);

var fullName = 'Ryan Byrnes';

var firstAndLastName = fullName.split(' ');

console.log('Value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('Value of sayMyName:', sayMyName);
