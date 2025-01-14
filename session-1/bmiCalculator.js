// Project: A simple BMI calculator

let myHeight = 1.8; // <- in m
let myWeight = 75; // <- in kg

const bmiFormula = (weight, height) => (weight / height ** 2).toFixed(1);

const bmiCategory = bmi => {
  if (bmi < 16.0) {
    return "Severly Underweight";
  } else if (16.0 <= bmi && bmi <= 18.4) {
    return "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    return "Normal";
  } else if (25 <= bmi && bmi <= 29.9) {
    return "Overweight";
  } else if (30 <= bmi && bmi <= 34.9) {
    return "Moderately Obese";
  } else if (35 <= bmi && bmi <= 39.9) {
    return "Severly Obese";
  } else {
    return "Morbidly Obese";
  }
}

const bmiFunction = (weight, height) => {

  let bmiResult = bmiFormula(myWeight, myHeight);
  let bmiClass = bmiCategory(bmiResult);

  console.log(`BMI: '${bmiResult}' | Weight range: '${bmiClass}'`);
}

bmiFunction(myWeight, myHeight);