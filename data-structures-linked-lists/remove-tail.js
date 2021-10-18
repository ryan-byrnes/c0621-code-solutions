/* exported removeTail */

function removeTail(list) {
  if (!list.next) {
    return;
  }
  let copy = list;
  let previous;
  while (copy.next) {
    previous = copy;
    copy = copy.next;
  }
  previous.next = null;
}
