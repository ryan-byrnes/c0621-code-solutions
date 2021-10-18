/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    max = Math.max(max, stack.peek());
    stack.pop();
  }
  return max;
}
