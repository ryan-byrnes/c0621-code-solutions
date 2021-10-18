var counter = 0;
var image = document.querySelectorAll('img');
var circle = document.querySelectorAll('.fa-circle');
var circleClicked = document.querySelector('.circle-clicked');
var chevronLeft = document.querySelector('.fa-chevron-left');
var chevronRight = document.querySelector('.fa-chevron-right');
var intervalId = setInterval(display, 3000);

function previousOrNextImage(event) {
  clearInterval(intervalId);
  intervalId = setInterval(display, 3000);
  if (event.target === chevronLeft) {
    counter--;
  }
  if (event.target === chevronRight) {
    counter++;
  }
  if (counter === image.length) {
    counter = 0;
  }
  if (counter === -1) {
    counter = image.length - 1;
  }
  next();
}

function next() {
  for (let i = 0; i < image.length; i++) {
    if (i === counter) {
      image[i].setAttribute('class', '');
      circle[i].setAttribute('class', 'fas fa-circle padding-left-right');
    } else {
      image[i].setAttribute('class', 'hidden');
      circle[i].setAttribute('class', 'far fa-circle padding-left-right');
    }
  }
}

function display() {
  counter++;
  if (counter === image.length) {
    counter = 0;
  }
  next();
}

chevronLeft.addEventListener('click', previousOrNextImage);
chevronRight.addEventListener('click', previousOrNextImage);
circleClicked.addEventListener('click', circleClick);

function circleClick(event) {
  clearInterval(intervalId);
  intervalId = setInterval(display, 3000);
  if (event.target.matches('.far')) {
    counter = parseInt(event.target.getAttribute('circle-view'));
    next();
  }
}
