def get_adjusted_income(income):
    inflation_rate = 1 - .0314
    adjusted_income = income * inflation_rate
    return adjusted_income

def calculate_federal_tax(income, pre_tax_savings):
    standard_deduction = 13850  # Standard deduction for a single taxpayer
    taxable_income = income - pre_tax_savings - standard_deduction

    if taxable_income <= 11000:
        tax = taxable_income * 0.10
    elif 11001 <= taxable_income <= 44735:
        tax = 11000 * 0.10 + (taxable_income - 11000) * 0.12
    elif 44736 <= taxable_income <= 95375:
        tax = 11000 * 0.10 + (44735 - 11000) * 0.12 + (taxable_income - 44735) * 0.22
    else:
        tax = 11000 * 0.10 + (44735 - 11000) * 0.12 + (95375 - 44735) * 0.22 + (taxable_income - 95375) * 0.24

    return tax

def calculate_state_tax(income):
    if income <= 20000:
        state_tax = 0.014 * income
    elif income <= 35000:
        state_tax = 0.0175 * (income) - 70
    elif income <= 40000:
        state_tax = 0.035 * (income) - 682.50
    elif income <= 75000:
        state_tax = 0.0553 * (income) - 1492.50
    elif income <= 500000:
        state_tax = 0.0637 * (income) - 2126.25
    elif income <= 1000000:
        state_tax = 0.0897 * (income) - 15126.25
    else:
        state_tax = 0.1075 * (income) - 32926.25
#Returns the state tax rate
    return state_tax

def calculate_fica_tax(income):
    # Define FICA tax rate (Social Security and Medicare).
    fica_tax_rate = 0.0765  # As of 2021, this was the combined Social Security and Medicare rate.
    return fica_tax_rate * income

def calculate_sdi_sui_fli_tax(income):
    # Define SDI, SUI, and FLI tax rates.
    sdi_tax_rate = 0.009 * income
    sui_tax_rate = 0.00425 * income
    fli_tax_rate = 0.006 * income
    # Calculate the total tax rate for SDI, SUI, and FLI.
    sdi_sui_fli_tax_rate = sdi_tax_rate + sui_tax_rate + fli_tax_rate
    return sdi_sui_fli_tax_rate

def get_income_tax(income, pre_tax_savings):
    federal_tax = calculate_federal_tax(income, pre_tax_savings)
    state_tax = calculate_state_tax(income)
    fica_tax = calculate_fica_tax(income)
    sdi_sui_fli_tax = calculate_sdi_sui_fli_tax(income)
    return federal_tax, state_tax, fica_tax, sdi_sui_fli_tax
