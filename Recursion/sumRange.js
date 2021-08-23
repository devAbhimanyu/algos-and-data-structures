function sumRange(num = 0) {
  if (num === 0) return 0;
  return num + sumRange(--num);
}

console.log(sumRange(4));
