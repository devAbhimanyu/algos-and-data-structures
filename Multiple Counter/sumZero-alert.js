//we get a sorted array, and need to return pair whose sum is 0

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  const result = [];
  while (left < right) {
    console.log(left, right);
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  console.log(result);
  return result;
}
sumZero([-3, -2, -1, 0, 1, 2, 5]);
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
