function countDown(num = 0) {
  if (num <= 0) return num;
  console.log(num);
  countDown(--num);
}

countDown(5);
