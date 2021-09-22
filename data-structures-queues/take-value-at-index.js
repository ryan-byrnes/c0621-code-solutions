/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let counter = index;
  let front = queue.dequeue();
  while (counter > 0) {
    queue.enqueue(front);
    front = queue.dequeue();
    counter--;
  }
  return front;
}
