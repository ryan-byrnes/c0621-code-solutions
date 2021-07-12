/* exported todos */

var todos = [];

var previouslTodosJSON = localStorage.getItem('javascript-local-storage');

if (previouslTodosJSON !== null) {
  todos = JSON.parse(previouslTodosJSON);
}

window.addEventListener('beforeunload', function stringJSON() {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
