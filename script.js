// JavaScript code goes here

// Example code:
// You can add event listeners to track user input or update data dynamically

// Sample function to calculate BMI
function calculateBMI(weight, height) {
    const bmi = weight / Math.pow(height, 2);
    return bmi.toFixed(2);
  }
  
  // Example event listener
  document.getElementById('calculate-bmi-btn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight-input').value);
    const height = parseFloat(document.getElementById('height-input').value);
    const result = calculateBMI(weight, height);
    document.getElementById('bmi-result').innerText = result;
  });
  