//Given two positive integers, find out if the two numbers have the same frequency of digits.
//(182,281) true

function sameFrequency(n, m) {
  const nStr = n.toString();
  const mStr = m.toString();
  if (nStr.length !== mStr.length) return false;

  const dict = {};

  for (let num of nStr) {
    dict[num] = dict[num] ? dict[num]++ : 1;
  }

  for (let num of mStr) {
    if (!dict[num]) return false;
    dict[num] = dict[num]--;
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(314, 221));
console.log(sameFrequency(1, 23));
console.log(sameFrequency(3589578, 5879385));
