/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const newFirst = list.next;
  list.next = newFirst.next;
  newFirst.next = list;
  return newFirst;

}
