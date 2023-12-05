function calculateAdjustedIncome() {
    var income = parseFloat(document.getElementById('income').value);

    if (!isNaN(income)) {
        // Assuming the Flask route for calculation is '/calculate'
        window.location.href = '/calculate?income=' + income;
    } else {
        document.getElementById('error').innerText = 'Invalid input. Please enter a valid numeric value.';
    }
}
