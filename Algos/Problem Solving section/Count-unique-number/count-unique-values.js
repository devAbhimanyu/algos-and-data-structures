const values = [1, 7, 2, 3, 4, 5, 4, 4, 7, 1, 2, 9, 11];
const uniqueValue = new Set(values);
console.log(uniqueValue.size); //always true

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99])); //true
console.log(countUniqueValues(values)); //false
