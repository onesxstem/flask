from flask import Flask, render_template, request, render_template_string

app = Flask(__name__)

def get_adjusted_income(income):
    inflation_rate = 1 - 0.02
    adjusted_income = income * inflation_rate
    return adjusted_income

@app.route('/', methods=['GET', 'POST'])
def index():
    index_html = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Income Calculator</title>
    </head>
    <body>
        <form method="post" action="/">
            <label for="income">How much is your annual income?</label>
            <input type="number" name="income" required>
            <button type="submit">Submit</button>
        </form>
        {% if error_message %}
            <p>{{ error_message }}</p>
        {% endif %}
    </body>
    </html>
    """

    result_html = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Income Calculator Result</title>
    </head>
    <body>
        <p>Your annual income adjusted for inflation is: ${{ adjusted_income|round(2) }}</p>
    </body>
    </html>
    """

    if request.method == 'POST':
        try:
            income = float(request.form['income'])
            adjusted_income = get_adjusted_income(income)
            return render_template_string(result_html, adjusted_income=adjusted_income)
        except ValueError:
            error_message = "Invalid input. Please enter a valid numeric value."
            return render_template_string(index_html, error_message=error_message)
    return render_template_string(index_html)

if __name__ == '__main__':
    app.run(debug=True)
