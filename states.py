# states.py

def calculate_state_tax_alabama(income):
    tax_info = {
        'rates': [0.02, 0.04, 0.05],
        'brackets': [500, 3000],
        'deductions': [0, 0]
    }
    return calculate_state_tax(income, tax_info, 'Alabama')


def calculate_state_tax_alaska(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_arizona(income):
    tax_info = {
        'rates': [0.025],
        'brackets': [],
        'deductions': [0]
    }
    return calculate_state_tax(income, tax_info, 'Arizona')

def calculate_state_tax_arkansas(income):
    tax_info = {
        'rates': [0, 0.02, 0.03, 0.034, 0.047],
        'brackets': [5099, 10299, 14699, 24299],
        'deductions': [0]
    }
    return calculate_state_tax(income, tax_info, 'Arkansas')


def calculate_state_tax_colorado(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Colorado')

def calculate_state_tax_california(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'California')

def calculate_state_tax_connecticut(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Connecticut')

def calculate_state_tax_delaware(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Delaware')

def calculate_state_tax_florida(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_georgia(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Georgia')

def calculate_state_tax_hawaii(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Hawaii')

def calculate_state_tax_idaho(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Idaho')

def calculate_state_tax_illinois(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Illinois')

def calculate_state_tax_indiana(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Indiana')

def calculate_state_tax_iowa(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Iowa')

def calculate_state_tax_kansas(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Kansas')

def calculate_state_tax_kentucky(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Kentucky')

def calculate_state_tax_louisiana(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Louisiana')

def calculate_state_tax_maine(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Maine')

def calculate_state_tax_maryland(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Maryland')

def calculate_state_tax_massachusetts(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Massachusetts')

def calculate_state_tax_michigan(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Michigan')

def calculate_state_tax_minnesota(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Minnesota')

def calculate_state_tax_mississippi(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Mississippi')

def calculate_state_tax_missouri(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Missouri')

def calculate_state_tax_montana(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Montana')

def calculate_state_tax_nebraska(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
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
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'New Jersey')

def calculate_state_tax_new_mexico(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'New Mexico')

def calculate_state_tax_new_york(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'New York')

def calculate_state_tax_north_carolina(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'North Carolina')

def calculate_state_tax_north_dakota(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'North Dakota')

def calculate_state_tax_ohio(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Ohio')

def calculate_state_tax_oklahoma(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Oklahoma')

def calculate_state_tax_oregon(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Oregon')

def calculate_state_tax_pennsylvania(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Pennsylvania')

def calculate_state_tax_rhode_island(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Rhode Island')

def calculate_state_tax_south_carolina(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
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
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Utah')

def calculate_state_tax_vermont(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Vermont')

def calculate_state_tax_virginia(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Virginia')

def calculate_state_tax_washington(income):
    # Doesn't have state income tax
    return 0

def calculate_state_tax_west_virginia(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'West Virginia')

def calculate_state_tax_wisconsin(income):
    tax_info = {
        'rates': [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123],
        'brackets': [8544, 20255, 31969, 44377, 56085, 286492, 343788, 572980],
        'deductions': [0, 170, 753, 1296, 2136, 7270, 11039, 26944]
    }
    return calculate_state_tax(income, tax_info, 'Wisconsin')

def calculate_state_tax_wyoming(income):
    # Doesn't have state income tax
    return 0

state_tax_functions = {
    'Alabama': calculate_state_tax_alabama,
    'Alaska': calculate_state_tax_alaska,
    'Arizona': calculate_state_tax_arizona,
    'Arkansas': calculate_state_tax_arkansas,
    'California': calculate_state_tax_california,
    'Colorado': calculate_state_tax_colorado,
    'Connecticut': calculate_state_tax_connecticut,
    'Delaware': calculate_state_tax_delaware,
    'Florida': calculate_state_tax_florida,
    'Georgia': calculate_state_tax_georgia,
    'Hawaii': calculate_state_tax_hawaii,
    'Idaho': calculate_state_tax_idaho,
    'Illinois': calculate_state_tax_illinois,
    'Indiana': calculate_state_tax_indiana,
    'Iowa': calculate_state_tax_iowa,
    'Kansas': calculate_state_tax_kansas,
    'Kentucky': calculate_state_tax_kentucky,
    'Louisiana': calculate_state_tax_louisiana,
    'Maine': calculate_state_tax_maine,
    'Maryland': calculate_state_tax_maryland,
    'Massachusetts': calculate_state_tax_massachusetts,
    'Michigan': calculate_state_tax_michigan,
    'Minnesota': calculate_state_tax_minnesota,
    'Mississippi': calculate_state_tax_mississippi,
    'Missouri': calculate_state_tax_missouri,
    'Montana': calculate_state_tax_montana,
    'Nebraska': calculate_state_tax_nebraska,
    'Nevada': calculate_state_tax_nevada,
    'New Hampshire': calculate_state_tax_new_hampshire,
    'New Jersey': calculate_state_tax_new_jersey,
    'New Mexico': calculate_state_tax_new_mexico,
    'New York': calculate_state_tax_new_york,
    'North Carolina': calculate_state_tax_north_carolina,
    'North Dakota': calculate_state_tax_north_dakota,
    'Ohio': calculate_state_tax_ohio,
    'Oklahoma': calculate_state_tax_oklahoma,
    'Oregon': calculate_state_tax_oregon,
    'Pennsylvania': calculate_state_tax_pennsylvania,
    'Rhode Island': calculate_state_tax_rhode_island,
    'South Carolina': calculate_state_tax_south_carolina,
    'South Dakota': calculate_state_tax_south_dakota,
    'Tennessee': calculate_state_tax_tennessee,
    'Texas': calculate_state_tax_texas,
    'Utah': calculate_state_tax_utah,
    'Vermont': calculate_state_tax_vermont,
    'Virginia': calculate_state_tax_virginia,
    'Washington': calculate_state_tax_washington,
    'West Virginia': calculate_state_tax_west_virginia,
    'Wisconsin': calculate_state_tax_wisconsin,
    'Wyoming': calculate_state_tax_wyoming,
}

def calculate_state_tax(income, tax_info, state):
    if isinstance(tax_info, (float, int)):
        return tax_info  # Return the flat rate (no brackets)

    brackets = tax_info.get('brackets')
    if brackets is None:  # Flat rate calculation
        flat_rate = tax_info['rates'][0]
        deductions = tax_info['deductions'][0]
        taxable_income = income - deductions
        state_tax = taxable_income * flat_rate
    else:  # Bracketed rate calculation
        brackets = [0] + brackets
        deductions = tax_info['deductions']
        rates = tax_info['rates']

        taxable_income = income - deductions[0]

        state_tax = 0
        for i in range(1, len(brackets)):
            if taxable_income > brackets[i]:
                state_tax += (brackets[i] - brackets[i-1]) * rates[i-1]
            else:
                state_tax += (taxable_income - brackets[i-1]) * rates[i-1]
                break

        # Calculate tax for the amount over the last bracket
        state_tax += (taxable_income - brackets[-1]) * rates[-1]

    return round(state_tax, 2)



def get_income_tax(income, state):
    state_tax_function = state_tax_functions.get(state)
    
    if state_tax_function:
        tax_info = state_tax_function(income)
        if isinstance(tax_info, (float, int)):
            return tax_info  # Return the flat rate (no brackets)
        state_tax = calculate_state_tax(income, tax_info, state)
        return state_tax