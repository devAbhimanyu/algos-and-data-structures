function insertionSort(arr = []) {
  const { length } = arr;
  for (let i = 1; i < length; i++) {
    let currValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currValue;
  }
  console.log(arr);
}

insertionSort([8, 23, 4, 5, 6, 7]);
