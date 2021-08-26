function merge(arr1 = [], arr2 = []) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = 0; j < arr2.length; j++) {
  //       if (arr1[i] < arr2[j]) {
  //         result.push(arr1[i]);
  //         break;
  //       } else {
  //         result.push(arr2[j]);
  //       }
  //     }
  //   }
  //   console.log(result);
  return result;
}

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middle);
  const secondHalf = arr.slice(middle);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
console.log(mergeSort([101, 150, 50, 2, 14, 99, 100]));
