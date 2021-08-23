/*Write a recursive function called isPalindrome which returns true if the string passed 
to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str = "") {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 1) return true;
  const lastChar = str.slice(-1);
  const firstChar = str[0];
  if (str.length === 2) return firstChar === lastChar;
  if (firstChar === lastChar)
    return isPalindrome(str.substr(1, str.length - 2));
  return false;
}

isPalindrome("amanaplanacanalpanama"); // false
