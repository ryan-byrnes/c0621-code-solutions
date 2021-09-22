/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (second === undefined) {
    return first;
  }
  const bigger = Math.max(first, second);
  const smaller = Math.min(first, second);
  queue.enqueue(bigger);
  return smaller;
}
