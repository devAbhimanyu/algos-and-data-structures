function repeatedString(s = "", n = 0) {
  //   // Write your code here
  //   if (s.length === 1 && s !== "a") return 0;
  //   if (s.length === 1 && s === "a") return n;
  //   let str = "";
  //   while (str.length !== n) {
  //     const remaining = n - str.length;
  //     str = str + s.substring(0, remaining);
  //   }
  //   let countA = 0;
  //   for (let i = 0; i < n; i++) {
  //     const val = str[i];
  //     if (val === "a") countA++;
  //   }
  //   return countA;
  if (s.includes("a")) {
    const sTotal = Math.floor(n / s.length); // repeated string total
    const aCount = s.match(/a/g).length; // 'a' character count in s
    let aTotalCount = sTotal * aCount; // total 'a' count of repeated string pattern within number limit
    const remainingChar = n % s.length; // remaining characters after repeating string within number limit

    // if there are remaining characters, add them to the total 'a' count.
    if (remainingChar !== 0 && s.substr(0, remainingChar).includes("a")) {
      aTotalCount += s.substr(0, remainingChar).match(/a/g).length;
    }

    aTotalCount = Math.floor(aTotalCount);
    return aTotalCount;
  } else {
    return 0;
  }
}
console.log(repeatedString("abcac", 10));
