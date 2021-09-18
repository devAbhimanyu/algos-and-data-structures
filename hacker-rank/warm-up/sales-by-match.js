function sockMerchant(n, ar) {
  // Write your code here
  const pairs = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    const val = ar[i];
    pairs[val] = pairs[val] ? pairs[val] + 1 : 1;
  }
  for (let key in pairs) {
    if (pairs[key] >= 2) {
      const match = Math.floor(pairs[key] / 2);
      count = count + match;
    }
  }

  return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
