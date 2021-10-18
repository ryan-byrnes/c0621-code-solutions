var contactForm = document.querySelector('#contact-form');
var inputs = contactForm.elements;
var values = {};

contactForm.addEventListener('submit', function () {
  event.preventDefault();
  values.name = inputs.name.value;
  values.email = inputs.email.value;
  values.message = inputs.message.value;
  console.log(values);
  contactForm.reset();
});
