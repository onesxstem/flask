#main.py
from flask import Flask, request, render_template, abort
from calculator import get_adjusted_income, calculate_federal_tax, calculate_state_tax, calculate_fica_tax, calculate_sdi_sui_fli_tax
from states import state_tax_function, state_sales_tax_rate

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/calculator', methods=['GET', 'POST'])
def calculator():
    if request.method == 'POST':
        try:
            relationship_status = request.form['relationship_status']
            state = request.form['state']
            annual_income = float(request.form['annual_income'])
            pre_tax_savings = float(request.form['pre_tax_savings'])
            post_tax_savings = float(request.form['post_tax_savings'])
            property_tax = float(request.form['property_tax'])
            early_term_tax = float(request.form['early_term_tax'])
            non_refundable_deposit_tax = float(request.form['non_refundable_deposit_tax'])
            late_fee_tax = float(request.form['late_tax'])
            parking_tax = float(request.form['parking_tax'])
            vehicle_reg_tax = float(request.form['vehicle_reg_tax'])
            insuff_funds_annual = float(request.form['insuff_funds_tax'])

            weed_smoking_monthly = float(request.form['weed_tax'])
            weed_tax_rate = 1.52
            weed_tax = weed_smoking_monthly * 12 * weed_tax_rate

            tire_buy_annual = float(request.form['tire_tax'])
            tire_tax_rate = 1.50
            tire_tax = tire_buy_annual * tire_tax_rate

            tobacco_packs_weekly = float(request.form['tobacco_tax'])
            tobacco_tax_rate = 2.70
            tobacco_tax = tobacco_packs_weekly * 52 * tobacco_tax_rate

            alcohol_spending_weekly = float(request.form['alcohol_tax'])
            alcohol_tax_rate = 0.1
            alcohol_tax = alcohol_spending_weekly * 52 * alcohol_tax_rate

            uber_rides_monthly = float(request.form['uber_tax'])
            uber_tax_rate = 0.50
            uber_tax = uber_rides_monthly * 12 * uber_tax_rate

            vape_smoking_monthly = float(request.form['vape_tax'])
            vape_tax_rate = 0.10
            vape_tax = vape_smoking_monthly * 12 * vape_tax_rate

            flight_travel_annual = float(request.form['flight_tax'])
            flight_tax_rate = 0.182
            flight_tax = flight_travel_annual * flight_tax_rate
            
            gas_per_week = float(request.form['gas_tax'])
            gas_tax_rate = 0.423
            gas_tax = gas_per_week * gas_tax_rate * 52

            gun_ammo_buy_annual = float(request.form['gun_tax'])
            gun_tax_rate = 0.10
            gun_tax = gun_ammo_buy_annual * gun_tax_rate

            cell_phone_monthly = float(request.form['cell_tax'])
            cell_phone_rate = 0.20
            cell_tax = cell_phone_monthly * cell_phone_rate * 12

            toll_spending_monthly = float(request.form['toll_tax'])
            toll_tax_rate = 0.01
            toll_tax = toll_spending_monthly * toll_tax_rate * 12

            hotel_spending_annual = float(request.form['hotel_tax'])
            hotel_tax_rate = 0.08
            hotel_tax = hotel_spending_annual * hotel_tax_rate

            car_rental_spending_annual = float(request.form['car_rental_tax'])
            car_rental_tax_rate = 0.08
            car_rental_tax = car_rental_spending_annual * car_rental_tax_rate

            utility_spending_monthly = float(request.form['utility_tax'])
            utility_tax_rate = 0.06
            utility_tax = utility_spending_monthly * utility_tax_rate * 12

            park_tax_annual = float(request.form['park_tax'])
            park_tax_rate = 1.0
            park_tax = park_tax_annual * park_tax_rate

            education_tax_annual = float(request.form['education_tax'])
            education_tax_rate = 0.18
            education_tax = education_tax_annual * education_tax_rate

            event_ticket_annual = float(request.form['event_ticket_tax'])
            event_ticket_fee = 0.09
            event_ticket_tax = event_ticket_annual * event_ticket_fee

            closing_fee_annual = float(request.form['closing_tax'])
            closing_fee_tax = closing_fee_annual

            hoa_fee_monthly = float(request.form['hoa_tax'])
            hoa_tax = hoa_fee_monthly * 12

            pet_fee_monthly = float(request.form['pet_tax'])
            pet_tax = pet_fee_monthly * 12

            soda_tax_daily = float(request.form['soda_tax'])
            soda_tax_rate = .01
            soda_tax = soda_tax_daily * 365 * soda_tax_rate

            insurance_monthly = float(request.form['insurance_tax'])
            insurance_tax = insurance_monthly * 12

            atm_visit_monthly = float(request.form['atm_tax'])
            atm_fee = 4.00
            atm_fee_tax = atm_visit_monthly * 12 * atm_fee

            realty_transfer_annual = float(request.form['realty_transfer_tax'])
            realty_transfer_fee = 0.008
            realty_transfer_tax = realty_transfer_annual * realty_transfer_fee
            
            capital_gain = float(request.form['capital_gain_tax'])
            capital_gain_tax_rate = 0.20
            capital_gain_tax = capital_gain * capital_gain_tax_rate

            food_monthly = float(request.form['food_sales_tax'])
            sales_tax_rate = 0.06625
            food_sales_tax = food_monthly * sales_tax_rate

            uber_cost_monthly = float(request.form['uber_cost'])
            
            weed_cost_monthly = float(request.form['weed_cost'])
            
            tire_cost_annual = float(request.form['tire_cost'])
            
            donation_tax = float(request.form['donation_tax'])

            childcare_monthly = float(request.form['childcare'])
            childcare = childcare_monthly * 12

            housing_monthly = float(request.form['housing'])
            housing = housing_monthly * 12
            
            subscriptions_monthly = float(request.form['subscriptions'])
            subscriptions = subscriptions_monthly * 12

            entertainment_monthly = float(request.form['entertainment'])
            entertainment = entertainment_monthly * 12

            personal_care_monthly = float(request.form['personal_care'])
            personal_care = personal_care_monthly * 12

            transportation_mx_annual= float(request.form['transportation_maintenance'])

            clothing_annual= float(request.form['clothing'])

            home_mx_annual= float(request.form['home_maintenance'])

            misc_monthly = float(request.form['miscellaneous'])
            misc = misc_monthly * 12

            variable_list = [
            ('Weed Tax', weed_tax),
            ('Tire Tax', tire_tax),
            ('Tobacco Tax', tobacco_tax),
            ('Alcohol Tax', alcohol_tax),
            ('Uber Tax', uber_tax),
            ('Vape Tax', vape_tax),
            ('Flight Tax', flight_tax),
            ('Gas Tax', gas_tax),
            ('Gun Tax', gun_tax),
            ('Cell Phone Tax', cell_tax),
            ('Toll Tax', toll_tax),
            ('Hotel Tax', hotel_tax),
            ('Car Rental Tax', car_rental_tax),
            ('Utility Tax', utility_tax),
            ('Park Tax', park_tax),
            ('Education Tax', education_tax),
            ('Event Ticket Tax', event_ticket_tax),
            ('Closing Fee Tax', closing_fee_tax),
            ('HOA Tax', hoa_tax),
            ('Pet Tax', pet_tax),
            ('Soda Tax', soda_tax),
            ('Insurance Tax', insurance_tax),
            ('ATM Fee Tax', atm_fee_tax),
            ('Realty Transfer Tax', realty_transfer_tax),
            ('Insufficient Funds Tax', insuff_funds_annual),
            ('Capital Gain Tax', capital_gain_tax),
            ('Early Termination Tax', early_term_tax),
            ('Non-Refundable Deposit Tax', non_refundable_deposit_tax),
            ('Parking Fee Tax', parking_tax),
            ('Vehicle Registration Tax', vehicle_reg_tax),
            ('Late Fee Tax', late_fee_tax),
            ('Property Tax', property_tax),
            ('Food Sales Tax', food_sales_tax),
            ('Uber Cost', uber_cost_monthly),
            ('Weed Cost', weed_cost_monthly),
            ('Tire Cost', tire_cost_annual),
            ('Donation Tax', donation_tax),
            ('Childcare', childcare),
            ('Housing', housing),
            ('Subscriptions', subscriptions),
            ('House Maintenance', home_mx_annual),
            ('Transportation Maintenance', transportation_mx_annual),
            ('Entertainment', entertainment),
            ('Miscellaneous', misc),
            ('Personal Care', personal_care),
            ('Clothing', clothing_annual)

            ]
            
            adjusted_income = get_adjusted_income(annual_income)
            federal_tax = calculate_federal_tax(annual_income, pre_tax_savings, relationship_status)
            state_tax = state_tax_function(annual_income, state)
            fica_tax = calculate_fica_tax(annual_income)
            sdi_sui_fli_tax = calculate_sdi_sui_fli_tax(annual_income)
            
            total_spent = (
            property_tax + car_rental_spending_annual + (insurance_monthly * 12) + (utility_spending_monthly * 12) + realty_transfer_tax +
            hotel_spending_annual + (tobacco_packs_weekly * 52) + (alcohol_spending_weekly * 52) + (weed_cost_monthly * 12) + housing +
            (vape_smoking_monthly * 12) + flight_travel_annual + (gas_per_week * 52) + gun_ammo_buy_annual + tire_cost_annual + (subscriptions) +
            (cell_phone_monthly * 12) + (toll_spending_monthly * 12) + vehicle_reg_tax + park_tax_annual + education_tax_annual + (entertainment) +
            early_term_tax + late_fee_tax + event_ticket_annual + closing_fee_tax + (uber_cost_monthly * 12) + (childcare) + (personal_care) + (misc) +
            (hoa_fee_monthly * 12) + (clothing_annual) + (home_mx_annual) + (transportation_mx_annual) + (pet_fee_monthly * 12) + (atm_visit_monthly * atm_fee) +
            non_refundable_deposit_tax + parking_tax + insuff_funds_annual + event_ticket_annual + (food_monthly * 12) + donation_tax
            
            )

            total_tax = (
                capital_gain_tax, car_rental_tax, insurance_tax, utility_tax,
                hotel_tax, tobacco_tax, alcohol_tax, vape_tax, property_tax, tire_tax,
                flight_tax, gun_tax, cell_tax, toll_tax, vehicle_reg_tax, park_tax,
                education_tax, early_term_tax, event_ticket_tax, hoa_tax, food_sales_tax,
                pet_tax, realty_transfer_tax, insuff_funds_annual, gas_tax, uber_tax, weed_tax,
                non_refundable_deposit_tax, parking_tax, late_fee_tax, closing_fee_annual, atm_fee_tax
            )

            sales_tax_rate = state_sales_tax_rate(state)
            sales_tax = sales_tax_rate * (gun_ammo_buy_annual + car_rental_spending_annual + flight_travel_annual + (vape_smoking_monthly * 12) +
                                   (tobacco_packs_weekly * 52) + event_ticket_annual + (weed_cost_monthly * 12) + (alcohol_spending_weekly * 52) +
                                   tire_cost_annual + personal_care + transportation_mx_annual + home_mx_annual
                                   
            )

            total_income = adjusted_income + (capital_gain_tax / 0.20)
            total_savings = pre_tax_savings + post_tax_savings
            grand_total = sum(total_tax) + federal_tax + state_tax + fica_tax + sdi_sui_fli_tax + sales_tax
            total_expense = total_spent + federal_tax + state_tax + fica_tax + sdi_sui_fli_tax + capital_gain_tax
            whats_left = (total_income - total_savings - total_expense)
            
            return render_template('result.html', relationship_status=relationship_status, state=state,
                           federal_tax=federal_tax, state_tax=state_tax, sales_tax=sales_tax,
                           fica_tax=fica_tax, sdi_sui_fli_tax=sdi_sui_fli_tax, variable_list=variable_list,
                           total_income=total_income, total_savings=total_savings,
                           grand_total=grand_total, whats_left=whats_left, total_expense=total_expense)

        except ValueError:
            error_message = "Invalid input. Please enter valid numeric values."
            return render_template('calculator.html', error_message=error_message)

    return render_template('calculator.html')

@app.route('/quizzes')
def main_quiz_page():
    return render_template('quizzes.html')

@app.route('/articles')
def articles():
    return render_template('articles.html')

@app.route('/articles/<article_id>')
def article(article_id):
    if article_id == 'unmasking-inflation-the-stealth-tax-on-your-wealth':
        return render_template('articles/article_one.html')
    elif article_id == 'lesser-known-taxes-impacting-your-finances':
        return render_template('articles/article_two.html')
    elif article_id == 'how-the-wealthy-navigate-tax-liabilities':
        return render_template('articles/article_three.html')
    elif article_id == 'fractional-reserve-banking-unveiling-the-mechanism-and-risks':
        return render_template('articles/article_four.html')
    else:
        abort(404)

@app.route('/stats')
def stats():
    return render_template('stats.html')

@app.route('/store')
def store():
    return render_template('store.html')

@app.route('/mobile_app')
def mobile_app():
    return render_template('mobile_app.html')

@app.route('/about_us')
def about_us():
    return render_template('about_us.html')

@app.route('/contact_us')
def contact_us():
    return render_template('contact_us.html')

if __name__ == '__main__':
    app.run(debug=True)