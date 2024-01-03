# Define federal tax brackets based on relationship status
relationship_tax_brackets = {
    'Single': [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37],
    'Married Filing Jointly': [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37],  # Adjust with actual brackets
    'Married Filing Separately': [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37],  # Adjust with actual brackets
    'Head of Household': [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37]  # Adjust with actual brackets
}

# Define state tax brackets based on state
state_tax_brackets = {
    'Alabama': [0.02, 0.04, 0.05, 0.05],  # Example brackets, adjust with actual brackets
    'Alaska': [0.0],  # Example brackets, adjust with actual brackets
    'Arizona': [0.0259, 0.0288, 0.0336, 0.0424],  # Example brackets, adjust with actual brackets
    'Arkansas': [0.009, 0.025, 0.035, 0.059],  # Example brackets, adjust with actual brackets
    'California': [0.01, 0.02, 0.04, 0.08],  # Example brackets, adjust with actual brackets
    'Colorado': [0.0463, 0.0495, 0.0594, 0.078],  # Example brackets, adjust with actual brackets
    'Connecticut': [0.03, 0.05, 0.055, 0.069],  # Example brackets, adjust with actual brackets
    'Delaware': [0.022, 0.039, 0.048, 0.066],  # Example brackets, adjust with actual brackets
    'Florida': [0.0],  # No state income tax in Florida
    'Georgia': [0.01, 0.02, 0.04, 0.05],  # Example brackets, adjust with actual brackets
    'Hawaii': [0.014, 0.032, 0.055, 0.09],  # Example brackets, adjust with actual brackets
    'Idaho': [0.016, 0.036, 0.046, 0.063],  # Example brackets, adjust with actual brackets
    'Illinois': [0.0495],  # Example brackets, adjust with actual brackets
    'Indiana': [0.0323, 0.0333, 0.0353, 0.0453],  # Example brackets, adjust with actual brackets
    'Iowa': [0.009, 0.032, 0.062, 0.0898],  # Example brackets, adjust with actual brackets
    'Kansas': [0.027, 0.049, 0.052, 0.057],  # Example brackets, adjust with actual brackets
    'Kentucky': [0.02, 0.03, 0.04, 0.05],  # Example brackets, adjust with actual brackets
    'Louisiana': [0.02, 0.04, 0.06, 0.06],  # Example brackets, adjust with actual brackets
    'Maine': [0.058, 0.0675, 0.0715, 0.0795],  # Example brackets, adjust with actual brackets
    'Maryland': [0.02, 0.03, 0.04, 0.05],  # Example brackets, adjust with actual brackets
    'Massachusetts': [0.051, 0.0525, 0.056, 0.0625],  # Example brackets, adjust with actual brackets
    'Michigan': [0.04],  # Example brackets, adjust with actual brackets
    'Minnesota': [0.0535, 0.0705, 0.0785, 0.0985],  # Example brackets, adjust with actual brackets
    'Mississippi': [0.03, 0.04, 0.05, 0.05],  # Example brackets, adjust with actual brackets
    'Missouri': [0.015, 0.02, 0.03, 0.05],  # Example brackets, adjust with actual brackets
    'Montana': [0.01, 0.02, 0.03, 0.05],  # Example brackets, adjust with actual brackets
    'Nebraska': [0.0246, 0.0351, 0.0501, 0.0684],  # Example brackets, adjust with actual brackets
    'Nevada': [0.0],  # No state income tax in Nevada
    'New Hampshire': [0.05],  # Example brackets, adjust with actual brackets
    'New Jersey': [0.014, 0.05525, 0.0637, 0.0897],  # Example brackets, adjust with actual brackets
    'New Mexico': [0.017, 0.032, 0.047, 0.049],  # Example brackets, adjust with actual brackets
    'New York': [0.04, 0.045, 0.0525, 0.059],  # Example brackets, adjust with actual brackets
    'North Carolina': [0.0525, 0.0625, 0.0655, 0.0755],  # Example brackets, adjust with actual brackets
    'North Dakota': [0.01, 0.02, 0.04, 0.05],  # Example brackets, adjust with actual brackets
    'Ohio': [0.027, 0.031, 0.036, 0.039],  # Example brackets, adjust with actual brackets
    'Oklahoma': [0.005, 0.01, 0.02, 0.05],  # Example brackets, adjust with actual brackets
    'Oregon': [0.05, 0.07, 0.09, 0.099],  # Example brackets, adjust with actual brackets
    'Pennsylvania': [0.03],  # Example brackets, adjust with actual brackets
    'Rhode Island': [0.0375, 0.0475, 0.0599, 0.0599],  # Example brackets, adjust with actual brackets
    'South Carolina': [0.03, 0.04, 0.05, 0.07],  # Example brackets, adjust with actual brackets
    'South Dakota': [0.0],  # No state income tax in South Dakota
    'Tennessee': [0.01, 0.02, 0.03, 0.05],  # Example brackets, adjust with actual brackets
    'Texas': [0.0],  # No state income tax in Texas
    'Utah': [0.0495, 0.0685, 0.0795, 0.0995],  # Example brackets, adjust with actual brackets
    'Vermont': [0.0355, 0.068, 0.078, 0.088],  # Example brackets, adjust with actual brackets
    'Virginia': [0.02, 0.03, 0.05, 0.0575],  # Example brackets,
    'Washington': [0.0],  # Adjust with actual brackets
    'West Virginia': [0.03, 0.04, 0.045, 0.06],  # Adjust with actual brackets
    'Wisconsin': [0.04, 0.0584, 0.0627, 0.0765, 0.0985],  # Adjust with actual brackets
    'Wyoming': [0.0],  # Adjust with actual brackets
}