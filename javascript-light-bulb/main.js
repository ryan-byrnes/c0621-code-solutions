var lightbulb = document.querySelector('.lightbulb');

var room = document.querySelector('.room');

lightbulb.addEventListener('click', function lightSwitch() {
  if (lightbulb.className === 'lightbulb lightbulb-on') {
    lightbulb.className = 'lightbulb lightbulb-off';
    room.className = 'room dark';
  } else {
    lightbulb.className = 'lightbulb lightbulb-on';
    room.className = 'room light';
  }
});
