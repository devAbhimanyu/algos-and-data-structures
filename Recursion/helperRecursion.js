function getAllOddVals(arr = []) {
  const result = [];
  function filterOdd(rArr = []) {
    if (rArr.length === 0) return;
    const [val] = rArr;
    if (val % 2 !== 0) result.push(val);

    filterOdd(rArr.splice(1));
  }
  filterOdd(arr);

  return result;
}

//pure recursion
function getAllOddValsPure(arr = []) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  const [val] = arr;
  if (val % 2 !== 0) newArr.push(val);

  newArr = newArr.concat(getAllOddValsPure(arr.splice(1)));
  return newArr;
}

const result = getAllOddValsPure([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(result);
