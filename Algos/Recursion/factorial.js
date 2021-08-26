function getFactorial(num = 0) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * getFactorial(--num);
}
console.log(getFactorial(4));
