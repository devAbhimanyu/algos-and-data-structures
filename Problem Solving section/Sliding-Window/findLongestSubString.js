/*Write a function called findLongestSubstring, which accepts a string and returns the 
length of the longest substring with all distinct characters

Time Complexity - O(n) */

function findLongestSubstring(str = "") {
  const lenght = str?.length;
  if (!lenght) return 0;
  let uniqueString = [];
  let max = 0;
  let i = 0;
  let charIndex = {};
  while (i < lenght) {
    const char = str[i];
    if (charIndex[char]) {
      i = charIndex[char];
      uniqueString = [];
      charIndex = {};
    } else {
      charIndex[char] = i + 1;
      uniqueString.push(char);
      i++;
      max = Math.max(max, uniqueString.length);
    }
  }
  return max;
}

function findLongestSubstring2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring2("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
