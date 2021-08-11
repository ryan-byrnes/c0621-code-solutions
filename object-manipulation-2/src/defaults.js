/* exported defaults */
/* check to see if key exists in target
if it does not, add property to target
*/

function defaults(target, source) {
  for (const key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
  return target;
}
