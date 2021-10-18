var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', clickTask);

function clickTask() {
  console.log('event.target and event.target.tagName:', event.target, event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closestItem = event.target.closest('.task-list-item');
    console.log('.task-list-item:', closestItem);
    closestItem.remove();

  }

}
