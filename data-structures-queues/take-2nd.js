/* exported take2nd */

function take2nd(queue) {
  const front = queue.peek();
  if (front !== undefined) {
    const taken = queue.dequeue(front);
    if (queue.peek() !== undefined) {
      const second = queue.dequeue();
      queue.enqueue(taken);
      return second;
    } else {
      return taken;
    }
  }
}
