var counter = 1;
var intervalId = setInterval(switchImageTimer, 3000);
switchImageTimer();

function switchImageTimer() {
  var image = document.querySelectorAll('img');
  var circle = document.querySelectorAll('.fa-circle');
  if (counter > 5) {
    counter = 1;
  }
  if (counter === 0) {
    counter = 5;
  }
  if (counter <= 5 && counter > 0) {
    for (var i = 0; i < image.length; i++) {
      if (counter === parseInt(image[i].getAttribute('image-view'))) {
        image[i].setAttribute('class', '');
        circle[i].setAttribute('class', 'fas fa-circle padding-left-right');
      } else {
        image[i].setAttribute('class', 'hidden');
        circle[i].setAttribute('class', 'far fa-circle padding-left-right');
      }
    }
  }
  counter += 1;
}

function previousOrNextImage(event) {
  var chevronLeft = document.querySelector('.fa-chevron-left');
  var chevronRight = document.querySelector('.fa-chevron-right');

  if (event.target === chevronLeft) {
    clearInterval(intervalId);
    counter -= 2;
    switchImageTimer();
    intervalId = setInterval(switchImageTimer, 3000);
  } else if (event.target === chevronRight) {
    clearInterval(intervalId);
    switchImageTimer();
    intervalId = setInterval(switchImageTimer, 3000);
  }
}

document.addEventListener('click', previousOrNextImage);
document.addEventListener('click', circleClick);

function circleClick(event) {
  var circle = document.querySelectorAll('.fa-circle');
  for (var i = 0; i < circle.length; i++) {
    if (event.target === circle[i]) {
      clearInterval(intervalId);
      counter = parseInt(event.target.getAttribute('circle-view'));
      switchImageTimer();
      event.target.setAttribute('class', 'fas fa-circle padding-left-right');
      intervalId = setInterval(switchImageTimer, 3000);
    }
  }
}
