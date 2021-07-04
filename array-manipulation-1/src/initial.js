/* exported initial */
/* receive argument array
iterate through each element of the array and add each element except the last to a new array
return new array */

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== (array.length - 1)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
