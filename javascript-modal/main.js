var modalBackground = document.querySelector('.modal-background');
var noButton = document.querySelector('.no-button');
var modalButton = document.querySelector('.modal-button');

modalButton.addEventListener('click', function showModal() {
  modalBackground.className = 'modal-background';
});

noButton.addEventListener('click', function hideModal() {
  modalBackground.className = 'modal-background closed';
});
