var tabContainer = document.querySelector('.tab-container');
var tabElements = document.querySelectorAll('.tab');
var viewElements = document.querySelectorAll('.view');

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
    var dataView = event.target.getAttribute('data-view');
    for (i = 0; i < viewElements.length; i++) {
      if (dataView === viewElements[i].getAttribute('data-view')) {
        viewElements[i].className = 'view';
      } else {
        viewElements[i].className = 'view hidden';
      }
    }
  }
}
