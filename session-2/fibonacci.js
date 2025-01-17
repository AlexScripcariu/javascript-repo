// Code to make a fibonacci sequence

function fibonacciSequence(maxCount) {
  let currentSum = 0;
  let prevNum = 1;
  let prevSum = 0;

  for (let count = 1; count <= maxCount; count++) {
    if (count === 1) {
      console.log(`Fibonacci num ${count}: ${currentSum}`);
      continue;
    }

    currentSum = prevNum + prevSum;
    console.log(`Fibonacci num ${count}: ${currentSum}`);
    prevNum = prevSum;
    prevSum = currentSum;
  }

}

fibonacciSequence(10);
