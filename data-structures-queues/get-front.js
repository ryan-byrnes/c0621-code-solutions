/* exported getFront */

function getFront(queue) {
  const front = queue.peek();
  if (front !== undefined) {
    return front;
  }
}
