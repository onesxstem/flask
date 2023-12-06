// script.js
document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.getElementById('article-content');

    // Function to calculate adjusted income
    function calculateAdjustedIncome() {
        var income = parseFloat(document.getElementById('income').value);

        if (!isNaN(income)) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/form', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onreadystatechange = function () {
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

    function loadArticle(articleId) {
        fetch(`/articles/${articleId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching article: ${response.statusText}`);
                }
                return response.text();
            })
            .then(articleContent => {
                mainContent.innerHTML = articleContent;
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Event delegation for article links and read more links
    document.addEventListener('click', function (event) {
        const target = event.target;
        const articleId = target.getAttribute('data-article');

        if (target.classList.contains('article-link') || target.classList.contains('read-more')) {
            event.preventDefault();
            loadArticle(articleId);
        }
    });

    // Event listener for the calculate button
    const calculateButton = document.getElementById('calculate-button');
    if (calculateButton) {
        calculateButton.addEventListener('click', function (event) {
            event.preventDefault();
            calculateAdjustedIncome();
        });
    }
});
