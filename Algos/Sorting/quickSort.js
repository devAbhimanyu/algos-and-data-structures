function pivotHelper(arr = [], start = 0, end = arr.length - 1) {
  function swap(arr = [], i, j) {
    return ([arr[i], arr[j]] = [arr[j], arr[i]]);
  }

  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr = [], left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    //left side
    quickSort(arr, left, pivotIndex - 1);
    //right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
// console.log(quickSort([101, 150, 50, 2, 14, 99, 100]));
