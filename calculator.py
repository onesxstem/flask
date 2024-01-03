# calculator.py

from tax_calculations import tax_brackets
from states import calculate_state_tax, state_tax_functions

STANDARD_DEDUCTIONS = {
    'Single': 14600,
    'Married Filing Separately': 14600,
    'Head of Household': 21900,
    'Married Filing Jointly': 29200,
}

FEDERAL_TAX_BRACKETS = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37]

FEDERAL_TAX_LIMITS = {
    'Single': [0, 11600, 47150, 100525, 191950, 243725, 609350],
    'Married Filing Separately': [0, 11600, 47150, 100525, 191950, 243725, 365600],
    'Head of Household': [0, 21900, 63100, 100500, 191950, 243700, 609350],
    'Married Filing Jointly': [0, 29200, 94300, 201050, 383900, 487450, 731200],
}

FEDERAL_TAX_BASES = [0, 1160, 5426, 17168.50, 39110.50, 55678.50, 183647.25]

def get_adjusted_income(income):
    inflation_rate = 1 - 0.0314
    adjusted_income = income * inflation_rate
    return adjusted_income

def calculate_federal_tax(income, pre_tax_savings, relationship_status):
    standard_deduction = STANDARD_DEDUCTIONS.get(relationship_status, 0)
    taxable_income = income - pre_tax_savings - standard_deduction

    # Retrieve tax brackets, bases, and limits based on relationship status
    brackets = FEDERAL_TAX_LIMITS.get(relationship_status, [])
    bases = FEDERAL_TAX_BASES
    rates = FEDERAL_TAX_BRACKETS

    # Calculate tax using the brackets, bases, and rates
    tax = 0
    remainder = taxable_income - brackets[0]

    for i in range(1, len(brackets)):
        if taxable_income <= brackets[i]:
            tax = bases[i-1] + rates[i-1] * remainder
            break
        else:
            remainder = taxable_income - brackets[i]

    return max(0, tax)  # Ensure the tax is non-negative

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

def get_income_tax(income, pre_tax_savings, relationship_status, state):
    state_tax_function = state_tax_functions.get(state)
    
    if state_tax_function:
        tax_info = state_tax_function(income)
        federal_tax = calculate_federal_tax(income, pre_tax_savings, relationship_status)
        state_tax = calculate_state_tax(income, tax_info, state)
        fica_tax = calculate_fica_tax(income)
        sdi_sui_fli_tax = calculate_sdi_sui_fli_tax(income)
        return federal_tax, state_tax, fica_tax, sdi_sui_fli_tax,
