function bubbleSort(arr = []) {
  const { length } = arr;
  let noSwaps;
  for (let i = length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      const init = arr[j];
      const last = arr[j + 1];
      if (init > last) {
        arr[j] = last;
        arr[j + 1] = init;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      console.log(`the loop went till ${i}`);
      break;
    }
  }
  console.log(arr);
  return arr;
}

bubbleSort([37, 45, 29, 10, 8]);
bubbleSort([8, 23, 4, 5, 6, 7]);
