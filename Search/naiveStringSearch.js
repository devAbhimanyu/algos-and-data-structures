function stringSearch(str = "", search = "") {
  const searchStrLength = search.length;
  let count = 0;
  const l = str.length - searchStrLength + 1;
  for (let i = 0; i <= l; i++) {
    const subStr = str.substr(i, searchStrLength);
    if (subStr === search) count++;
  }
  return count;
}

console.log(stringSearch("womgadsfomg", "omg"));
