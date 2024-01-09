# states.py

def calculate_state_tax_alabama(income):
    tax_info = {
        'rates': [0.02, 0.04, 0.05],
        'brackets': [0, 500, 3000],
    }
    return calculate_state_tax(income, tax_info, 'Alabama')


def calculate_state_tax_alaska(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_arizona(income):
    tax_info = {
        'rates': [0.025],
    }
    return calculate_state_tax(income, tax_info, 'Arizona')

def calculate_state_tax_arkansas(income):
    tax_info = {
        'rates': [0, 0.02, 0.03, 0.034, 0.047],
        'brackets': [0, 5099, 10299, 14699, 24299],
    }
    return calculate_state_tax(income, tax_info, 'Arkansas')


def calculate_state_tax_colorado(income):
    tax_info = {
        'rates': [0.044]
    }
    return calculate_state_tax(income, tax_info, 'Colorado')

def calculate_state_tax_california(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [0, 10412, 24684, 38959, 54081, 68350, 349137, 418961, 698271],
        'base_tax': [0, 104.12, 389.56, 960.56, 1867.88, 3009.40, 29122.59, 36314.46, 67876.49]
    }
    return calculate_state_tax(income, tax_info, 'California')

def calculate_state_tax_connecticut(income):
    tax_info = {
        'rates': [0.04, 0.05, 0.055, 0.06, 0.065, 0.069, 0.0699],
        'brackets': [10000, 50000, 100000, 200000, 250000, 500000],
        'base_tax': [0, 400, 2250, 6300, 12325, 31218]
    }
    return calculate_state_tax(income, tax_info, 'Connecticut')

def calculate_state_tax_delaware(income):
    tax_info = {
        'rates': [0, 0.022, 0.039, 0.048, 0.052, 0.055, 0.066],
        'brackets': [0, 2000, 5000, 10000, 20000, 25000, 60000],
        'base_tax': [0, 0, 66, 261, 741, 1001, 2943.50],
    }
    return calculate_state_tax(income, tax_info, 'Delaware')

def calculate_state_tax_florida(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_georgia(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.03, 0.04, 0.05, 0.0575],
        'brackets': [0, 750, 2250, 3750, 5250, 7000],
        'base_tax': [1, 8, 38, 83, 143, 230],
    }
    return calculate_state_tax(income, tax_info, 'Georgia')

def calculate_state_tax_hawaii(income):
    tax_info = {
        'rates': [0.014, 0.032, 0.055, 0.064, 0.068, 0.072, 0.076, 0.079, 0.0825, 0.09, 0.1, 0.11],
        'brackets': [0, 2400, 4800, 9600, 14400, 19200, 24000, 36000, 48000, 150000, 175000, 200000]
    }
    return calculate_state_tax(income, tax_info, 'Hawaii')

def calculate_state_tax_idaho(income):
    tax_info = {
        'rates': [0.01, 0.03, 0.045, 0.06],
        'brackets': [0, 1662, 4987, 8311],
    }
    return calculate_state_tax(income, tax_info, 'Idaho')

def calculate_state_tax_illinois(income):
    tax_info = {
        'rates': [0.0495],
    }
    return calculate_state_tax(income, tax_info, 'Illinois')

def calculate_state_tax_indiana(income):
    tax_info = {
        'rates': [0.0323],
    }
    return calculate_state_tax(income, tax_info, 'Indiana')

def calculate_state_tax_iowa(income):
    tax_info = {
        'rates': [0.044, 0.0482, 0.057, 0.06],
        'brackets': [0, 6000, 30000, 75000],
        'base_tax': [0, 264.00, 1420.80, 3985.80],
    }
    return calculate_state_tax(income, tax_info, 'Iowa')

def calculate_state_tax_kansas(income):
    tax_info = {
        'rates': [0.031, 0.0525, 0.057],
        'brackets': [0, 15000, 30000],
        'base_tax': [0, 465, 1252.50],
    }
    return calculate_state_tax(income, tax_info, 'Kansas')

def calculate_state_tax_kentucky(income):
    tax_info = {
        'rates': [0.0450],
    }
    return calculate_state_tax(income, tax_info, 'Kentucky')

def calculate_state_tax_louisiana(income):
    tax_info = {
        'rates': [0.02, 0.04, 0.06],
        'brackets': [0, 12500, 50000],
        'base_tax': [0, 2500, 9250]
    }
    return calculate_state_tax(income, tax_info, 'Louisiana')

def calculate_state_tax_maine(income):
    tax_info = {
    'rates': [0.058, 0.0675, 0.0715],
    'brackets': [0, 24500, 58049],
    'base_tax': [0, 1421.75, 4292.87]
}
    return calculate_state_tax(income, tax_info, 'Maine')

def calculate_state_tax_maryland(income):
    tax_info = {
    'brackets': [0, 1000, 2000, 3000, 100000, 125000, 150000, 250000],
    'rates': [0.02, 0.03, 0.04, 0.0475, 0.05, 0.0525, 0.055, 0.0575],
    'base_tax': [0, 20, 50, 90, 4697.50, 5947.50, 7260.00, 12760.00],
}
    return calculate_state_tax(income, tax_info, 'Maryland')

def calculate_state_tax_massachusetts(income):
    tax_info = {
        'rates': [0.0500],
    }
    return calculate_state_tax(income, tax_info, 'Massachusetts')

def calculate_state_tax_michigan(income):
    tax_info = {
        'rates': [0.0425],
    }
    return calculate_state_tax(income, tax_info, 'Michigan')

def calculate_state_tax_minnesota(income):
    tax_info = {
        'rates': [0.0535, 0.068, 0.0785, 0.0985],
        'brackets': [0, 30070, 98760, 183340],
        'base_tax': [0, 1608.75, 6715.68, 14392.19],
    }
    return calculate_state_tax(income, tax_info, 'Minnesota')

def calculate_state_tax_mississippi(income):
    tax_info = {
        'rates': [0.0500],
    }
    return calculate_state_tax(income, tax_info, 'Mississippi')

def calculate_state_tax_missouri(income):
    tax_info = {
        'brackets': [104, 1053, 2106, 3159, 4212, 5265, 6318, 7371, 8424],
        'rates': [0, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.054],
        'base_tax': [0, 0, 16, 37, 63, 95, 132, 174, 221, 274],
    }
    return calculate_state_tax(income, tax_info, 'Missouri')

def calculate_state_tax_montana(income):
    tax_info = {
        'brackets': [0, 3300, 5800, 8900, 12000, 15400, 19800],
        'rates': [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.0675],
    }
    return calculate_state_tax(income, tax_info, 'Montana')

def calculate_state_tax_nebraska(income):
    tax_info = {
        'brackets': [0, 3700, 22170, 35730],
        'rates': [0.0246, 0.0351, 0.0501, 0.0664],
        'base_tax': [0, 91.02, 739.32, 1418.68],
    }
    return calculate_state_tax(income, tax_info, 'Nebraska')

def calculate_state_tax_nevada(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_new_hampshire(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_new_jersey(income):
    tax_info = {
        'brackets': [0, 20000, 35000, 40000, 75000, 500000, 1000000],
        'rates': [0.014, 0.0175, 0.035, 0.05525, 0.0637, 0.0897, 0.1075],
    }
    return calculate_state_tax(income, tax_info, 'New Jersey')

def calculate_state_tax_new_mexico(income):
    tax_info = {
        'brackets': [0, 5500, 11000, 16000, 210000],
        'rates': [0.017, 0.032, 0.047, 0.049, 0.059],
    }
    return calculate_state_tax(income, tax_info, 'New Mexico')

def calculate_state_tax_new_york(income):
    tax_info = {
        'brackets': [0, 8500, 11700, 13900, 80650, 215400, 1077550, 5000000, 25000000],
        'rates': [0.04, 0.045, 0.0525, 0.0585, 0.0625, 0.0685, 0.0965, 0.103, 0.109],
        'base_tax': [0, 340, 484, 600, 4504, 12926, 71984, 450500, 2510500],
    }
    return calculate_state_tax(income, tax_info, 'New York')

def calculate_state_tax_north_carolina(income):
    tax_info = {
        'rates': [0.0499],
    }
    return calculate_state_tax(income, tax_info, 'North Carolina')

def calculate_state_tax_north_dakota(income):
    tax_info = {
        'rates': [0.0475],
    }
    return calculate_state_tax(income, tax_info, 'North Dakota')

def calculate_state_tax_ohio(income):
    tax_info = {
        'brackets': [26050, 46100, 92150, 115300],
        'base_tax': [360.69, 915.07, 2400.64, 3254.41],
        'rates': [0.02765, 0.03226, 0.03688, 0.0399],
    }
    return calculate_state_tax(income, tax_info, 'Ohio')

def calculate_state_tax_oklahoma(income):
    tax_info = {
        'brackets': [0, 1000, 2500, 3750, 4900, 7200],
        'rates': [0.0025, 0.0075, 0.0175, 0.0275, 0.0375, 0.0475],
    }
    return calculate_state_tax(income, tax_info, 'Oklahoma')

def calculate_state_tax_oregon(income):
    tax_info = {
        'brackets': [0, 3750, 9450, 125000],
        'rates': [0.0475, 0.0675, 0.0875, 0.099],
    }
    return calculate_state_tax(income, tax_info, 'Oregon')

def calculate_state_tax_pennsylvania(income):
    tax_info = {
        'rates': [0.0307],
    }
    return calculate_state_tax(income, tax_info, 'Pennsylvania')

def calculate_state_tax_rhode_island(income):
    tax_info = {
        'brackets': [0, 73450, 166950],
        'rates': [0.0375, 0.0475, 0.0599],
    }
    return calculate_state_tax(income, tax_info, 'Rhode Island')

def calculate_state_tax_south_carolina(income):
    tax_info = {
        'brackets': [0, 3200, 16040],
        'rates': [0, 0.03, 0.065],
    }
    return calculate_state_tax(income, tax_info, 'South Carolina')

def calculate_state_tax_south_dakota(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_tennessee(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_texas(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_utah(income):
    tax_info = {
        'rates': [0.0485],
    }
    return calculate_state_tax(income, tax_info, 'Utah')

def calculate_state_tax_vermont(income):
    tax_info = {
        'brackets': [3500, 45400, 110550, 229050],
        'rates': [0.0335, 0.066, 0.076, 0.0875],
        'base_tax': [0, 1521, 5788, 14870],
    }
    return calculate_state_tax(income, tax_info, 'Vermont')


def calculate_state_tax_virginia(income):
    tax_info = {
        'brackets': [0, 3000, 5000, 17000],
        'rates': [0.02, 0.03, 0.05, 0.0575],
        'base_tax': [0, 60, 120, 720],
    }
    return calculate_state_tax(income, tax_info, 'Virginia')

def calculate_state_tax_washington(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_west_virginia(income):
    tax_info = {
        'brackets': [0, 10000, 25000, 40000, 60000],
        'rates': [0.0236, 0.0315, 0.0354, 0.0472, 0.0512],
        'base_tax': [0, 0, 315, 844.5, 1906.4],
    }
    return calculate_state_tax(income, tax_info, 'West Virginia')

def calculate_state_tax_wisconsin(income):
    tax_info = {
        'brackets': [0, 13810, 27630, 304170],
        'rates': [0.035, 0.044, 0.053, 0.0765],
    }
    return calculate_state_tax(income, tax_info, 'Wisconsin')

def calculate_state_tax_wyoming(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax(income, tax_info, state):
    tax_rates = tax_info.get('rates', [0])
    brackets = tax_info.get('brackets', [float('inf')])
    base_tax = tax_info.get('base_tax', [0])

    for i in range(len(brackets)):
        if i == 0 and income <= brackets[i]:
            return tax_rates[i] * income
        elif i > 0 and brackets[i-1] < income <= brackets[i]:
            # Check if there is a base tax for the current bracket
            if i - 1 < len(base_tax):
                return base_tax[i-1] + tax_rates[i] * (income - brackets[i-1])
            else:
                return tax_rates[i] * (income - brackets[i-1])

    # If no bracket is applicable, use the last bracket's base tax (if available)
    if base_tax and len(base_tax) >= len(brackets):
        return base_tax[-1] + tax_rates[-1] * (income - brackets[-1] if brackets else income)

    return base_tax[-1] + tax_rates[-1] * (income - brackets[-1] if brackets else income)

def state_tax_function(income, state):
    state = state.lower()  # Convert state name to lowercase for case-insensitive matching
    
    if state == 'alabama':
        return calculate_state_tax_alabama(income)
    elif state == 'alaska':
        return calculate_state_tax_alaska(income)
    elif state == 'arizona':
        return calculate_state_tax_arizona(income)
    elif state == 'arkansas':
        return calculate_state_tax_arkansas(income)
    elif state == 'california':
        return calculate_state_tax_california(income)
    elif state == 'colorado':
        return calculate_state_tax_colorado(income)
    elif state == 'connecticut':
        return calculate_state_tax_connecticut(income)
    elif state == 'delaware':
        return calculate_state_tax_delaware(income)
    elif state == 'florida':
        return calculate_state_tax_florida(income)
    elif state == 'georgia':
        return calculate_state_tax_georgia(income)
    elif state == 'hawaii':
        return calculate_state_tax_hawaii(income)
    elif state == 'idaho':
        return calculate_state_tax_idaho(income)
    elif state == 'illinois':
        return calculate_state_tax_illinois(income)
    elif state == 'indiana':
        return calculate_state_tax_indiana(income)
    elif state == 'iowa':
        return calculate_state_tax_iowa(income)
    elif state == 'kansas':
        return calculate_state_tax_kansas(income)
    elif state == 'kentucky':
        return calculate_state_tax_kentucky(income)
    elif state == 'louisiana':
        return calculate_state_tax_louisiana(income)
    elif state == 'maine':
        return calculate_state_tax_maine(income)
    elif state == 'maryland':
        return calculate_state_tax_maryland(income)
    elif state == 'massachusetts':
        return calculate_state_tax_massachusetts(income)
    elif state == 'michigan':
        return calculate_state_tax_michigan(income)
    elif state == 'minnesota':
        return calculate_state_tax_minnesota(income)
    elif state == 'mississippi':
        return calculate_state_tax_mississippi(income)
    elif state == 'missouri':
        return calculate_state_tax_missouri(income)
    elif state == 'montana':
        return calculate_state_tax_montana(income)
    elif state == 'nebraska':
        return calculate_state_tax_nebraska(income)
    elif state == 'nevada':
        return calculate_state_tax_nevada(income)
    elif state == 'new hampshire':
        return calculate_state_tax_new_hampshire(income)
    elif state == 'new jersey':
        return calculate_state_tax_new_jersey(income)
    elif state == 'new mexico':
        return calculate_state_tax_new_mexico(income)
    elif state == 'new york':
        return calculate_state_tax_new_york(income)
    elif state == 'north carolina':
        return calculate_state_tax_north_carolina(income)
    elif state == 'north dakota':
        return calculate_state_tax_north_dakota(income)
    elif state == 'ohio':
        return calculate_state_tax_ohio(income)
    elif state == 'oklahoma':
        return calculate_state_tax_oklahoma(income)
    elif state == 'oregon':
        return calculate_state_tax_oregon(income)
    elif state == 'pennsylvania':
        return calculate_state_tax_pennsylvania(income)
    elif state == 'rhode island':
        return calculate_state_tax_rhode_island(income)
    elif state == 'south carolina':
        return calculate_state_tax_south_carolina(income)
    elif state == 'south dakota':
        return calculate_state_tax_south_dakota(income)
    elif state == 'tennessee':
        return calculate_state_tax_tennessee(income)
    elif state == 'texas':
        return calculate_state_tax_texas(income)
    elif state == 'utah':
        return calculate_state_tax_utah(income)
    elif state == 'vermont':
        return calculate_state_tax_vermont(income)
    elif state == 'virginia':
        return calculate_state_tax_virginia(income)
    elif state == 'washington':
        return calculate_state_tax_washington(income)
    elif state == 'west virginia':
        return calculate_state_tax_west_virginia(income)
    elif state == 'wisconsin':
        return calculate_state_tax_wisconsin(income)
    elif state == 'wyoming':
        return calculate_state_tax_wyoming(income)
    else:
        raise ValueError(f"No tax calculation available for the state '{state}'.")

def state_sales_tax_rate(state):
    state_sales_tax_rate = {
    'alabama': 0.04,
    'alaska': 0.05,
    'arizona': 0.056,
    'arkansas': 0.065,
    'california': 0.0725,
    'colorado': 0.029,
    'connecticut': 0.0635,
    'delaware': 0.00,
    'florida': 0.06,
    'georgia': 0.04,
    'hawaii': 0.04,
    'idaho': 0.06,
    'illinois': 0.0625,
    'indiana': 0.07,
    'iowa': 0.06,
    'kansas': 0.065,
    'kentucky': 0.06,
    'louisiana': 0.04,
    'maine': 0.055,
    'maryland': 0.06,
    'massachusetts': 0.0625,
    'michigan': 0.06,
    'minnesota': 0.06875,
    'mississippi': 0.07,
    'missouri': 0.04225,
    'montana': 0.00,
    'nebraska': 0.055,
    'nevada': 0.0685,
    'new hampshire': 0.00,
    'new jersey': 0.06625,
    'new mexico': 0.05125,
    'new york': 0.04,
    'north carolina': 0.0475,
    'north dakota': 0.05,
    'ohio': 0.0575,
    'oklahoma': 0.045,
    'oregon': 0.00,
    'pennsylvania': 0.06,
    'rhode island': 0.07,
    'south carolina': 0.06,
    'south dakota': 0.045,
    'tennessee': 0.07,
    'texas': 0.0625,
    'utah': 0.0485,
    'vermont': 0.06,
    'virginia': 0.043,
    'washington': 0.065,
    'west virginia': 0.06,
    'wisconsin': 0.05,
    'wyoming': 0.04,
}

    # Convert the state name to lowercase to make the comparison case-insensitive
    state = state.lower()

    # Check if the state has a corresponding sales tax rate
    if state in state_sales_tax_rate:
        # Return the sales tax rate for the selected state
        return state_sales_tax_rate[state]
    else:
        raise ValueError(f"No sales tax rate available for the state '{state}'.")
