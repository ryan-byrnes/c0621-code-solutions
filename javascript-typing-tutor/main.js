var character = document.querySelectorAll('span');

document.addEventListener('keydown', function keyPress(e) {
  for (var i = 0; i < character.length; i++) {
    if (character[i].textContent === e.key) {
      character[i].className = 'correct-character';
    } else {
      character[i].className = 'current-character incorrect-character';
    }
  }
});
