window.addEventListener("load", function() {
    var bmiForm = document.getElementById('bmiForm');
    var answerInput = document.getElementById('answer');

    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Preventing form submission

        // Get the weight and height values
        var weight = +document.getElementById('weight').value;
        var height = +document.getElementById('height').value;

        // Check if weight and height are valid numbers
        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            // Calculate BMI
            var heightMeters = height / 100; // Convert height to meters
            var bmi = weight / (heightMeters * heightMeters);

            // Displaying the result in the answer input field
            answerInput.value = bmi.toFixed(2);
        } else {
            // Displaying the error message if input is invalid
            answerInput.value = "Invalid input";
        }
    });
});
