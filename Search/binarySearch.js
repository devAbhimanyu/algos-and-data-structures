/*
Write a function called binarySearch  which accepts a  sorted  array and a value and returns the index at which the value exists. Otherwise, return -1. 
This algorithm should be more efficient than linearSearch - 
you can read how to implement it here -
 https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and 
 here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/ */

function binarySearch(array, search) {
  let start = 0,
    end = array.length - 1,
    middle = Math.ceil(array.length / 2);
  while (start <= end) {
    const curr = array[middle];
    if (search === curr) return middle;
    if (search < curr) end = middle;
    else start = middle;
    middle = Math.ceil((start + end) / 2);
  }
  return -1;
}

function binarySearchRefactor(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
); // 2
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  95
); // 16
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); // -1
