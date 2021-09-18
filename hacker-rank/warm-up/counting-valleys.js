function countingValleys(steps, path) {
  // Write your code here
  let seaLevel = 0;
  let count = 0;
  for (let i = 0; i < steps; i++) {
    const val = path[i];
    if (val === "D") {
      downSteps += 1;
      seaLevel -= 1;
    } else {
      seaLevel += 1;
      downSteps -= 1;
    }

    if (seaLevel === 0 && valeyStart) {
      count++;
      valeyStart = false;
    }
  }
  return count;
}

console.log(countingValleys(8, "UDDDUDUU"));
