// Project: A simple bodyweight, BMI, macro calculator etc...

let myHeight = 1.7;
let myWeight = 70;

const bmiFormula = (height, weight) => (weight / height ** 2).toFixed(1) ;

// console.log(bmiFormula(myHeight, myWeight));

function convertHeight(height) {
  // This will convert from cm -> m
  return convert / 100;
}

function bmiCalculator(height, weight, convertingHeight = false) {
  if (convertingHeight) {
    height = convertHeight(height);
  }

  return bmiFormula(height, weight);
}

console.log(bmiCalculator(myHeight, myWeight));