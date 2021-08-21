/**
 * @function Frequency Counter - validAnagram
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as
 * @param str1
 * @param str2
 */
//original sol
function validAnagram(str1: string, str2: string): boolean {
  //if string lengths dont match return false
  if (str1.length !== str2.length) return false;
  let str1Char: { [key: string]: number } = {};
  let str2Char: { [key: string]: number } = {};

  for (let char of str1) {
    str1Char[char] = ++str1Char[char] || 1;
  }
  for (let char of str2) {
    str2Char[char] = ++str2Char[char] || 1;
  }

  for (let key in str1Char) {
    if (!str2Char[key]) return false;
    if (str1Char[key] !== str2Char[key]) return false;
  }
  return true;
}

//refactored: decread number of loop statments and simpler condition for checking occurence of letters
function validAnagramRefactored(str1: string, str2: string): boolean {
  //if string lengths dont match return false
  if (str1.length !== str2.length) return false;
  let str1Char: { [key: string]: number } = {};

  for (let char of str1) {
    str1Char[char] = str1Char[char] ? ++str1Char[char] : 1;
  }

  for (let letter of str2) {
    if (!str1Char[letter]) return false;
    str1Char[letter]--;
  }
  return true;
}

//test cases
let a = validAnagramRefactored("", ""); //true
console.log(a);
a = validAnagramRefactored("aaz", "aza"); //true
console.log(a);
a = validAnagramRefactored("anagram", "nagaram"); //true
console.log(a);
a = validAnagramRefactored("rat", "car"); //false
console.log(a);
a = validAnagramRefactored("qwerty", "rtyewq"); //true
console.log(a);
a = validAnagramRefactored("amanaplanacanalpanama", "acanalmanplanpamana"); //false
console.log(a);
