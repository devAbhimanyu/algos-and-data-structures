/*Write a function called averagePair. 
Given a sorted array of integers and a target average, determine if there is a pair of values in the array where
 the average of the pair equals the target average. There may be more than one pair that matches the average target.*/

function averagePair(arr = [], num) {
  const length = arr.length;
  if (!length) return false;
  let left = 0;
  let right = length - 1;

  while (left < right) {
    let leftVal = arr[left];
    let rightVal = arr[right];
    const avg = (leftVal + rightVal) / 2;
    if (avg === num) return true;
    else if (avg < num) {
      left++;
    } else right--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
