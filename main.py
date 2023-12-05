from flask import Flask, request, render_template
from ProjectX import (
    get_adjusted_income,
    get_income_tax,
)

app = Flask(__name__)

@app.route('/form', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        try:
        
            annual_income = float(request.form['annual gross income'])
            
            capital_gain = float(request.form['annual capital gain amount ($)'])
            capital_gain_tax_rate = 0.20
            capital_gain_tax = capital_gain * capital_gain_tax_rate
            
            pre_tax_savings = float(request.form['annual pre-tax savings'])
            
            post_tax_savings = float(request.form['annual post-tax savings'])
            
            property_tax = float(request.form['annual property tax'])

            weed_smoking_monthly = float(request.form['monthly weed consumption (oz.)'])
            weed_tax_rate = 1.52
            weed_tax = weed_smoking_monthly * 12 * weed_tax_rate

            tire_buy_annual = float(request.form['annual tires purchased (#)'])
            tire_tax_rate = 1.50
            tire_tax = tire_buy_annual * tire_tax_rate

            tobacco_spending_weekly = float(request.form['weekly tobacco ($)'])
            tobacco_tax_rate = 2.70
            tobacco_tax = tobacco_spending_weekly * 52 * tobacco_tax_rate

            alcohol_spending_weekly = float(request.form['weekly alcohol ($)'])
            alcohol_tax_rate = 0.1
            alcohol_tax = alcohol_spending_weekly * 52 * alcohol_tax_rate

            uber_rides_monthly = float(request.form['monthly uber rides (#)'])
            uber_tax_rate = 0.50
            uber_tax = uber_rides_monthly * 12 * uber_tax_rate

            vape_smoking_monthly = float(request.form['monthly vape ($)'])
            vape_tax_rate = 0.10
            vape_tax = vape_smoking_monthly * 12 * vape_tax_rate

            flight_travel_annual = float(request.form['annual flight tickets ($)'])
            flight_tax_rate = 0.182
            flight_tax = flight_travel_annual * flight_tax_rate
            
            #mpg = float(request.form['gas_tax_mpg'])
            #miles_per_week = float(request.form['gas_tax_miles_per_week'])
            #gas_tax_rate = 0.423
            #gas_tax = (miles_per_week / mpg) * gas_tax_rate * 52

            gun_ammo_buy_annual = float(request.form['annual gun/ammo purchases ($)'])
            gun_tax_rate = 0.10
            gun_tax = gun_ammo_buy_annual * gun_tax_rate

            cell_phone_monthly = float(request.form['monthly cell bill ($)'])
            cell_phone_rate = 0.20
            cell_tax = cell_phone_monthly * cell_phone_rate * 12

            toll_spending_monthly = float(request.form['monthly toll spent ($)'])
            toll_tax_rate = 0.01
            toll_tax = toll_spending_monthly * toll_tax_rate * 12

            hotel_spending_annual = float(request.form['annual hotel purchases ($)'])
            hotel_tax_rate = 0.08
            hotel_tax = hotel_spending_annual * hotel_tax_rate

            car_rental_spending_annual = float(request.form['annual car_rental spent ($)'])
            car_rental_tax_rate = 0.08
            car_rental_tax = car_rental_spending_annual * car_rental_tax_rate

            utility_spending_monthly = float(request.form['monthly utility bills ($)'])
            utility_tax_rate = 0.06
            utility_tax = utility_spending_monthly * utility_tax_rate * 12

            park_tax_annual = float(request.form['annual national park spent ($)'])
            park_tax_rate = 1.0
            park_tax = park_tax_annual * park_tax_rate

            tuition_tax_annual = float(request.form['annual tuition spent ($)'])
            tuition_tax_rate = 0.18
            tuition_tax = tuition_tax_annual * tuition_tax_rate

            early_term_tax = float(request.form['annual early termination fees ($)'])
            
            late_fee_tax = float(request.form['annual late fees ($)'])

            event_ticket_annual = float(request.form['annual event tickets spent ($)'])
            event_ticket_fee = 0.09
            event_ticket_tax = event_ticket_annual * event_ticket_fee

            closing_fee_annual = float(request.form['annual closing fees ($) '])
            closing_fee_tax = closing_fee_annual

            hoa_fee_monthly = float(request.form['monthly hoa fee ($)'])
            hoa_tax = hoa_fee_monthly * 12

            pet_fee_monthly = float(request.form['monthly pet fees ($)'])
            pet_tax = pet_fee_monthly * 12

            soda_tax_daily = float(request.form['daily soda intake (oz.)'])
            soda_tax_rate = .01
            soda_tax = soda_tax_daily * 365 * soda_tax_rate

            insurance_monthly = float(request.form['monthly insurance bills ($)'])
            insurance_tax = insurance_monthly * 12

            atm_visit_monthly = float(request.form['monthly atm visits (#)'])
            atm_fee = 4.00
            atm_fee_tax = atm_visit_monthly * 12 * atm_fee

            realty_transfer_annual = float(request.form['annual realty transfer fees ($)'])
            realty_transfer_fee = 0.008
            realty_transfer_tax = realty_transfer_annual * realty_transfer_fee

            insuff_funds_tax = float(request.form['annual insufficient funds fee ($)'])

            non_refundable_deposit_tax = float(request.form['annual non-refundable deposit fees ($)'])

            parking_tax = float(request.form['annual vehicle parking fee ($)'])
            
            vehicle_reg_tax = float(request.form['annual vehicle registration ($)'])

            # Call functions to calculate taxes
            adjusted_income = get_adjusted_income(annual_income)
            federal_tax, state_tax, fica_tax, sdi_sui_fli_tax = get_income_tax(annual_income, pre_tax_savings)
            
            #add gas_tax
            total_tax = (
                capital_gain_tax, property_tax, car_rental_tax, insurance_tax, utility_tax,
                hotel_tax, tobacco_tax, alcohol_tax, uber_tax, weed_tax, vape_tax,
                flight_tax, tire_tax, gun_tax, cell_tax, toll_tax, vehicle_reg_tax, park_tax,
                tuition_tax, early_term_tax, event_ticket_tax, hoa_tax,
                pet_tax, soda_tax, realty_transfer_tax, insuff_funds_tax,
                non_refundable_deposit_tax, parking_tax, late_fee_tax, closing_fee_annual, atm_fee_tax
            )

            sales_tax_exempt = (pre_tax_savings, federal_tax, state_tax, fica_tax, sdi_sui_fli_tax, post_tax_savings, capital_gain_tax, property_tax, insurance_tax, utility_tax,
                toll_tax, early_term_tax, hoa_tax, realty_transfer_tax,insuff_funds_tax,
                non_refundable_deposit_tax, late_fee_tax, closing_fee_tax, atm_fee_tax
            )

            total_income = adjusted_income + (capital_gain_tax / 0.20)
            total_savings = pre_tax_savings + post_tax_savings
            sales_tax = 0.06625 * (total_income - total_savings - sum(sales_tax_exempt))
            grand_total = sum(total_tax) + federal_tax + state_tax + fica_tax + sdi_sui_fli_tax + sales_tax
            whats_left = (total_income - total_savings - grand_total) / 12

            return render_template('result.html', federal_tax=federal_tax, state_tax=state_tax,
                                   fica_tax=fica_tax, sdi_sui_fli_tax=sdi_sui_fli_tax,
                                   total_tax=sum(total_tax), sales_tax=sales_tax,
                                   total_income=total_income, total_savings=total_savings,
                                   grand_total=grand_total, whats_left=whats_left)

        except ValueError:
            error_message = "Invalid input. Please enter valid numeric values."
            return render_template('index.html', error_message=error_message)

    return render_template('index.html')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
