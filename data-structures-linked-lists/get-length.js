/* exported getLength */

function getLength(list) {
  let counter = 1;
  let copy = list;
  while (copy.next) {
    counter++;
    copy = copy.next;
  }
  return counter;
}
