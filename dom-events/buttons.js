function handleClick(event) {
  console.log('message:', 'button clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

var buttonClick = document.querySelector('.click-button');

buttonClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('message:', 'button hovered');
  console.log('event:', event);
  console.log('target:', event.target);
}

var mouseOver = document.querySelector('.hover-button');

mouseOver.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('message:', 'button double-clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

var doubleClicked = document.querySelector('.double-click-button');

doubleClicked.addEventListener('dblclick', handleDoubleClick);
