var character = document.querySelectorAll('span');
var letter = 0;

document.addEventListener('keydown', function keyPress(e) {
  if (character[letter].textContent === e.key) {
    character[letter].className = 'correct-character';
    letter++;
    character[letter].className = 'current-character';
  } else {
    character[letter].className = 'current-character incorrect-character';
  }
}
);
