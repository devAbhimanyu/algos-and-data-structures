function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  console.log(max);
  return max;
}

function maxSubarraySumRefactor(arr, num) {
  const length = arr.length;
  if (num > length) return null;

  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  let seqSum = maxSum;
  for (let i = num; i < length; i++) {
    seqSum = seqSum - arr[i - num] + arr[i];
    maxSum = Math.max(seqSum, maxSum);
  }
  console.log(maxSum);
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
maxSubarraySumRefactor([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
