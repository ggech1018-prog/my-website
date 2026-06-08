function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultElement = document.getElementById("result");

    // Input validation: ensure weight and height are positive numbers
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let category = "";

        // BMI categories based on WHO standards
        if (bmi < 18.5) {
            category = "Underweight";
            resultElement.style.color = "orange"; // Visual feedback
        } else if (bmi < 25) {
            category = "Normal weight";
            resultElement.style.color = "green";
        } else if (bmi < 30) {
            category = "Overweight";
            resultElement.style.color = "red";
        } else {
            category = "Obese";
            resultElement.style.color = "red";
        }

        // Display the result with template literals
        resultElement.textContent = `Your BMI: ${bmi.toFixed(2)} - ${category}`;
    } else {
        // Error handling for invalid inputs
        alert("Please enter valid positive numbers for weight and height.");
        resultElement.textContent = "Your BMI:";
        resultElement.style.color = "#4a90e2"; // Reset color
    }
}