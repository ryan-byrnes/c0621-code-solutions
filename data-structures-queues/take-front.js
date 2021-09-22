/* exported takeFront */

function takeFront(queue) {
  const front = queue.peek();
  if (front !== undefined) {
    return queue.dequeue();
  }
}
