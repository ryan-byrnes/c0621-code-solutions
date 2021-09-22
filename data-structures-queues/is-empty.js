/* exported isEmpty */

function isEmpty(queue) {
  const front = queue.peek();
  if (front !== undefined) {
    return false;
  }
  return true;
}
