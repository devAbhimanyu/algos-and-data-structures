function indexOf(array, find) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === find) return i;
  }
  return -1;
}

console.log(indexOf([1, 2, 3, 4, 5, 6], 6));
console.log(indexOf([1, 2, 3, 4, 5], 8));
