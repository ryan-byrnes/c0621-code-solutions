/* exported todos */

var todos = [];

var previouslTodosJSON = localStorage.getItem('javascript-local-storage');

if (previouslTodosJSON !== null) {
  todos = JSON.parse(previouslTodosJSON);
}
