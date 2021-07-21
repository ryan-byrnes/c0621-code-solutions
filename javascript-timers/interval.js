var counter = 3;

function countdown() {
  var text = document.querySelector('h1');
  text.textContent = counter;
  counter -= 1;
  if (text.textContent === '0') {
    text.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(countdown, 1000);
interval();
