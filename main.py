from flask import Flask, render_template, request

app = Flask(__name__)

def get_adjusted_income(income):
    inflation_rate = 1 - 0.02
    adjusted_income = income * inflation_rate
    return adjusted_income

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate')
def calculate():
    try:
        income = float(request.args.get('income'))
        adjusted_income = get_adjusted_income(income)
        return render_template('result.html', adjusted_income=adjusted_income)
    except ValueError:
        return render_template('index.html', error_message='Invalid input. Please enter a valid numeric value.')

if __name__ == '__main__':
    app.run(debug=True)
