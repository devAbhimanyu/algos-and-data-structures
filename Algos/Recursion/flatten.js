/*
Write a recursive function called  flatten  which accepts 
an array of arrays and 
returns a new array with all values flattened.
*/
/**
 * @todo
 * @param  arr
 * @returns
 */
function flatten(arr = []) {
  const newArray = [];
  if (arr.length === 0) return newArray;
  const currVal = arr[0];
  if (Array.isArray(currVal)) {
    return newArray.concat(flatten(arr.slice(1)));
  }
  return [currVal].concat(flatten(arr.slice(1)));
}

function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
