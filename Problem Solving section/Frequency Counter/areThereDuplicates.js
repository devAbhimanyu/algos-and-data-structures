/*Implement a function called areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.*/

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  const dict = {};

  for (let val in arguments) {
    const arg = arguments[val];
    if (!dict[arg]) dict[arg] = 1;
    else return true;
  }

  return false;
}

function areThereDuplicatesMultipoint(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    //for this to work we need to have a sorted array
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function areThereDuplicatesOneLine() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3, 4));
console.log(areThereDuplicates(1, 2, 2, 3, 4));
console.log(areThereDuplicates("a", "s", "d", "f", "q"));
console.log(areThereDuplicates("a", "s", "d", "f", "q", "a"));
