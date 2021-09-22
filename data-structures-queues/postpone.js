/* exported postpone */

function postpone(queue) {
  const front = queue.peek();
  if (front !== undefined) {
    const taken = queue.dequeue(front);
    return queue.enqueue(taken);
  }
}
