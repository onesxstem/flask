function calculateAdjustedIncome() {
    var income = parseFloat(document.getElementById('income').value);

    if (!isNaN(income)) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/form', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Handle the response, if needed
                console.log(xhr.responseText);
            }
        };

        // Encode the data and send the request
        var formData = 'income=' + encodeURIComponent(income);
        xhr.send(formData);
    } else {
        document.getElementById('error').innerText = 'Invalid input. Please enter a valid numeric value.';
    }
}
