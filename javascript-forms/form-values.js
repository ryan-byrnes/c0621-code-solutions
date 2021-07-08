var contactForm = document.querySelector('#contact-form');
var inputs = contactForm.elements;
var values = {};

contactForm.addEventListener('submit', function () {
  event.preventDefault();
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].name === 'name') {
      values.name = inputs[i].value;
    } else if (inputs[i].name === 'email') {
      values.email = inputs[i].value;
    } else if (inputs[i].name === 'message') {
      values.message = inputs[i].value;
      console.log(values);
      contactForm.reset();
    }
  }
});
