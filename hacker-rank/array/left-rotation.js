// function rotLeft(a = [], d = 0) {
//   // Write your code here
//   const length = a.length;

//   if (length === 1) return a;

//   const rotations = d % length;
//   if (rotations === 0) return a;

//   for (let i = 0; i < rotations; i++) {
//     const sep = a.splice(1, length - 1);
//     a = sep.concat(a);
//   }
//   return a;
// }
function rotLeft(a, d) {
  // Write your code here
  let rslt = a.slice(d).concat(a.slice(0, d));
  return rslt;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
