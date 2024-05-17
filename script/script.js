document.addEventListener("DOMContentLoaded", function() {
    var bmiForm = document.getElementById('bmiForm');
    var answerInput = document.getElementById('answer');

    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the weight and height values
        var weight = parseFloat(document.getElementById('weight').value);
        var height = parseFloat(document.getElementById('height').value);

        // Check if weight and height are valid numbers
        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            // Calculate BMI
            var heightMeters = height / 100; // Convert height to meters
            var bmi = weight / (heightMeters * heightMeters);

            // Display the result in the answer input field
            answerInput.value = bmi.toFixed(2);
        } else {
            // Display error message if input is invalid
            answerInput.value = "Invalid input";
        }
    });
});