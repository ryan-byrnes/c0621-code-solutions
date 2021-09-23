/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const secondList = new LinkedList(value);
  secondList.next = list;
  return secondList;
}
