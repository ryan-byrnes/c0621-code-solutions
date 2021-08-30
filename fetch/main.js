fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log('array', data);
  });

fetch('https://pokeapi.co/api/v2/pokemon/arcanine')
  .then(response => response.json())
  .then(data => {
    console.log('pokemon', data);
  });
