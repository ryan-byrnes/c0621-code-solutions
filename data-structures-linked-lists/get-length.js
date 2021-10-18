/* exported getLength */

function getLength(list) {
  let listLength = 1;
  while (list.next) {
    list = list.next;
    listLength++;
  }
  return listLength;
}
