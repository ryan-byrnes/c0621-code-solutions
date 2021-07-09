var tabContainer = document.querySelector('.tab-container');
var tabElements = document.querySelectorAll('.tab');

tabContainer.addEventListener('click', matchesEvent);

function matchesEvent() {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabElements.length; i++) {
      if (event.target === tabElements[i]) {
        tabElements[i].className = 'tab active';
      } else {
        tabElements[i].className = 'tab';
      }
    }
  }
}
