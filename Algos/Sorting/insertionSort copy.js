function insertionSort(arr = []) {
  const { length } = arr;
  for (let i = 1; i < length; i++) {
    let currValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currValue; j--) {
      console.log(`-----i=${i} j=${j} jVal=${arr[j]} j+1Val=${arr[j + 1]} `);
      arr[j + 1] = arr[j];
      console.log(arr);
      console.log("-----------------");
    }
    console.log(`i=${i} j=${j} -----`);
    console.log(currValue, arr);
    arr[j + 1] = currValue;
    console.log(arr);
  }
  console.log(arr);
}

// insertionSort([37, 45, 29, 10, 8]);
insertionSort([8, 23, 4, 5, 6, 7]);

// [8, 23, 4, 5, 6, 7][(8, 23, 4, 5, 6, 7)][(8, 23, 4, 5, 6, 7)][
//   (8, 23, 4, 5, 6, 7)
// ][(8, 23, 4, 5, 6, 7)];
