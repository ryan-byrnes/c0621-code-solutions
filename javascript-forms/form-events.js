function handleFocus(event) {
  console.log('focus fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name and value:', event.target.name, event.target.value);
}

var nameField = document.querySelector('input[name="name"]');
var email = document.querySelector('input[name="email"');
var message = document.querySelector('textarea[name="message"]');

nameField.addEventListener('focus', handleFocus);
email.addEventListener('focus', handleFocus);
message.addEventListener('focus', handleFocus);

nameField.addEventListener('blur', handleBlur);
email.addEventListener('blur', handleBlur);
message.addEventListener('blur', handleBlur);

nameField.addEventListener('input', handleInput);
email.addEventListener('input', handleInput);
message.addEventListener('input', handleInput);
