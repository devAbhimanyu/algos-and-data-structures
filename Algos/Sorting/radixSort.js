function digitCountRefactor(num) {
  if (num === 0) return 0;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num = 0) {
  return num.toString().length;
}

function mostDigit(arr = []) {
  let max = 0;
  arr.forEach((val) => {
    const count = digitCount(val);
    max = Math.max(max, count);
  });
  return max;
}

function radixSort(arr = []) {
  const maxDigitsGount = mostDigit(arr);
  for (let k = 0; k < maxDigitsGount; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
