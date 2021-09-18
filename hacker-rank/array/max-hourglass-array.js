function hourglassSum(arr = [[], []]) {
  // Write your code here
  const maxRow = arr.length - 2;
  const maxCol = arr[0].length - 2;
  let max = -Infinity;
  for (let i = 0; i < maxRow; i++) {
    const firstRow = arr[i];
    const secRow = arr[i + 1];
    const thirdRow = arr[i + 2];
    for (let j = 0; j < maxCol; j++) {
      const sum =
        firstRow[j] +
        firstRow[j + 1] +
        firstRow[j + 2] +
        secRow[j + 1] +
        thirdRow[j] +
        thirdRow[j + 1] +
        thirdRow[j + 2];
      max = Math.max(max, sum);
    }
  }
  return max;
}

const ip = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(ip));
