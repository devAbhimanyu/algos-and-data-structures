/*Write a function called isSubsequence
 which takes in two strings and checks whether the characters in the first string form a
  subsequence of the characters in the second string. In other words, the function should 
  check whether the characters in the first string appear somewhere in the second string, 
  without their order changing.
  Your solution MUST have AT LEAST the following complexities:
  Time Complexity - O(N + M)
   Space Complexity - O(1)

   isSubsequence('hello', 'hello world'); // true</li>
   */

function isSubsequence(sub = "", str = "") {
  if (sub.length > str.length) return false;

  const subChars = {};
  const strChars = {};
  for (let char of sub) {
    subChars[char] = subChars[char] ? subChars[char]++ : 1;
  }
  for (let char of str) {
    strChars[char] = strChars[char] ? strChars[char]++ : 1;
  }
  for (let key in subChars) {
    const subCharCount = subChars[key];
    const strCharCount = strChars[key];
    if (subCharCount !== strCharCount) return false;
  }
  return true;
  // good luck. Add any arguments you deem necessary.
}

function isSubsequenceRefactor(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
