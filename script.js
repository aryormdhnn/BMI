function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / Math.pow(height / 100, 2);
    let result = document.getElementById("result");
  
    if (isNaN(bmi)) {
      result.innerHTML = "Please enter valid numbers for weight and height.";
    } else if (bmi < 18.5) {
      result.innerHTML = "Your BMI is <strong>" + bmi.toFixed(1) + "</strong>, which means you are <strong>underweight</strong>.";
    } else if (bmi < 25) {
      result.innerHTML = "Your BMI is <strong>" + bmi.toFixed(1) + "</strong>, which means you have a <strong>normal weight</strong>.";
    } else if (bmi < 30) {
      result.innerHTML = "Your BMI is <strong>" + bmi.toFixed(1) + "</strong>, which means you are <strong>overweight</strong>.";
    } else {
      result.innerHTML = "Your BMI is <strong>" + bmi.toFixed(1) + "</strong>, which means you are <strong>Obesity </strong>.";
    }
  }
  