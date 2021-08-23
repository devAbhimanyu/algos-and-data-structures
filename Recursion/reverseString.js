//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str = "") {
  if (str.length === 0) return "";
  const lastChar = str[str.length - 1];
  const remaininStr = str.substr(0, str.length - 1);
  return lastChar + reverse(remaininStr);
}

function reversRefactor(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa')
// reverse('rithmschool') // 'loohcsmhtir'
