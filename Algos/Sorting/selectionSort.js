function selectionSort(arr = []) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      const val = arr[j];
      if (arr[minIndex] > val) {
        minIndex = j;
      }
    }
    if (i !== minIndex) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  console.log(arr);
  return arr;
}

selectionSort([37, 45, 29, 10, 8]);
selectionSort([8, 23, 4, 5, 6, 7]);
