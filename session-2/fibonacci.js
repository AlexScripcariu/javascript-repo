// Code to make a fibonacci sequence

function fibonacciSequence(maxCount) {
  let ans = [];
  let currentSum = 0;
  let prevNum = 1;
  let prevSum = 0;

  for (let count = 1; count <= maxCount; count++) {
    if (count === 1) {
      ans.push(0);
      continue;
    }

    currentSum = prevNum + prevSum;
    ans.push(currentSum);
    prevNum = prevSum;
    prevSum = currentSum;
  }

  return ans;
}


fibonacciSequence(10);
