document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('results');
    const scoreContainer = document.getElementById('score');
    const quizSelector = document.getElementById('quiz-selector');

    const ipm = [
        {
        question: "What is the Sharpe ratio used for in investment analysis?",
        choices: [
            "A) Measuring market volatility",
            "B) Assessing risk-adjusted returns",
            "C) Calculating alpha in CAPM",
            "D) Evaluating liquidity ratios"
        ],
        correctAnswer: "B) Assessing risk-adjusted returns"
    },
    {
        question: "In the context of Modern Portfolio Theory (MPT), what does the efficient frontier represent?",
        choices: [
            "A) Maximum possible return for a given level of risk",
            "B) Optimal asset allocation for a given return",
            "C) Portfolio beta relative to the market",
            "D) Minimum variance portfolio"
        ],
        correctAnswer: "B) Optimal asset allocation for a given return"
        },

        {
        question: "What is the primary purpose of a limit order in stock trading?",
        choices: [
            "A) Executing trades at the current market price",
            "B) Placing an order without specifying a price",
            "C) Buying or selling a security at a specified price or better",
            "D) Hedging against market fluctuations"
        ],
        correctAnswer: "C) Buying or selling a security at a specified price or better"
        },
        {
        question: "When calculating the Net Present Value (NPV) of an investment, what does a positive NPV indicate?",
        choices: [
            "A) Loss on the investment",
            "B) Break-even point",
            "C) Profitable investment",
            "D) Irrelevant information for NPV analysis"
        ],
        correctAnswer: "C) Profitable investment"
        },

        {
        question: "Which financial instrument provides the holder the right, but not the obligation, to buy an underlying asset at a specified price before a certain expiration date?",
        choices: [
            "A) Futures contract",
            "B) Call option",
            "C) Put option",
            "D) Swap agreement"
        ],
        correctAnswer: "B) Call option"
        },
        {
        question: "What does the Capital Market Line (CML) represent in the context of the Capital Asset Pricing Model (CAPM)?",
        choices: [
            "A) Line connecting risk-free asset and market portfolio",
            "B) Line representing all efficient portfolios",
            "C) Graph of expected returns against beta (systematic risk)",
            "D) Line connecting all possible risky portfolios"
        ],
        correctAnswer: "C) Graph of expected returns against beta (systematic risk)"
        },
        {
        question: "In the context of behavioral finance, what does the disposition effect refer to?",
        choices: [
            "A) Efficient market hypothesis",
            "B) Overestimating future returns",
            "C) Holding onto losing investments and selling winners too quickly",
            "D) Market anomalies"
        ],
        correctAnswer: "C) Holding onto losing investments and selling winners too quickly"
        },
        {
        question: "What is the primary goal of Monte Carlo simulation in investment analysis?",
        choices: [
            "A) Predicting future market movements",
            "B) Simulating different scenarios to assess portfolio risk and return",
            "C) Estimating alpha in portfolio optimization",
            "D) Identifying optimal asset allocation"
        ],
        correctAnswer: "B) Simulating different scenarios to assess portfolio risk and return"

        },
        {
        question: "What does the term 'Rolling Returns' represent in the evaluation of investment performance?",
        choices: [
            "A) Average return over a specific time period",
            "B) Returns adjusted for inflation",
            "C) Returns calculated over successive, overlapping periods",
            "D) Cumulative returns over the entire investment horizon"
        ],
        correctAnswer: "C) Returns calculated over successive, overlapping periods"

        },
        {
        question: "In the context of fixed-income investments, what is the Macaulay Duration used for?",
        choices: [
            "A) Assessing credit risk",
            "B) Measuring interest rate sensitivity and price volatility",
            "C) Calculating yield to maturity",
            "D) Evaluating liquidity ratios in bond portfolios"
        ],
        correctAnswer: "B) Measuring interest rate sensitivity and price volatility"
    },
];

    const pfm = [
          {
            question: "Which type of account is typically used for retirement savings and offers tax advantages?",
            choices: [
                "A) Savings account",
                "B) Checking account",
                "C) 401(k)",
                "D) Certificate of deposit (CD)"
            ],
            correctAnswer: "C) 401(k)"
        },
        {
            question: "What is the term for the total value of all assets minus liabilities?",
            choices: [
                "A) Net income",
                "B) Gross income",
                "C) Net worth",
                "D) Gross profit"
            ],
            correctAnswer: "C) Net worth"
        },
        {
            question: "Which of the following is a form of passive income?",
            choices: [
                "A) Salary from a job",
                "B) Dividend from stocks",
                "C) Interest on a loan",
                "D) Renting a property"
            ],
            correctAnswer: "B) Dividend from stocks"
        },
        {
            question: "What is the concept of 'compound interest' in personal finance?",
            choices: [
                "A) Paying off debt",
                "B) Earning interest on interest",
                "C) Fixed interest rates",
                "D) Monthly interest payments"
            ],
            correctAnswer: "B) Earning interest on interest"
        },
        {
            question: "What is the term for the measurement of an investment portfolio\'s risk in relation to the market?",
            choices: [
                "A) Standard deviation",
                "B) Beta",
                "C) Alpha",
                "D) Sharpe ratio"
            ],
            correctAnswer: "B) Beta"
        },
        {
            question: "Which investment vehicle typically requires an investor to lock in their funds for a specific period with a fixed interest rate?",
            choices: [
                "A) Money market account",
                "B) Certificate of deposit (CD)",
                "C) Treasury bond",
                "D) Mutual fund"
            ],
            correctAnswer: "B) Certificate of deposit (CD)"
        },
        {
            question: "What financial concept is represented by the formula Net Income / Total Assets?",
            choices: [
                "A) Return on Investment (ROI)",
                "B) Debt-to-Equity Ratio",
                "C) Price-to-Earnings (P/E) Ratio",
                "D) Current Ratio"
            ],
            correctAnswer: "A) Return on Investment (ROI)"
        },
        {
            question: "What is the term for a diversified investment fund traded on the stock exchange?",
            choices: [
                "A) Hedge fund",
                "B) Index fund",
                "C) Venture capital fund",
                "D) Mutual fund"
            ],
            correctAnswer: "B) Index fund"
        },
        {
            question: "Which economic indicator measures the average change over time in the prices paid by consumers for goods and services?",
            choices: [
                "A) GDP (Gross Domestic Product)",
                "B) CPI (Consumer Price Index)",
                "C) PPI (Producer Price Index)",
                "D) Unemployment rate"
            ],
            correctAnswer: "B) CPI (Consumer Price Index)"
        },
        {
            question: "What is the term for the strategy of spreading investments across different asset classes to reduce risk?",
            choices: [
                "A) Asset allocation",
                "B) Market timing",
                "C) Concentrated investing",
                "D) Sector rotation"
            ],
            correctAnswer: "A) Asset allocation"
        },
    ];

    const epp = [
        {
            question: "In macroeconomics, what does GDP stand for?",
            choices: [
                "A) Gross Domestic Profit",
                "B) General Demand and Production",
                "C) Gross Domestic Product",
                "D) Government Development Program"
            ],
            correctAnswer: "C) Gross Domestic Product"
        },
        {
            question: "What is the Phillips Curve used to illustrate in economics?",
            choices: [
                "A) Inflation and unemployment trade-off",
                "B) Supply and demand equilibrium",
                "C) Fiscal policy effectiveness",
                "D) Consumer price index fluctuations"
            ],
            correctAnswer: "A) Inflation and unemployment trade-off"
        },
        {
            question: "In monetary policy, what is the federal funds rate?",
            choices: [
                "A) Interest rate charged by commercial banks",
                "B) Rate at which the Federal Reserve lends to banks overnight",
                "C) Benchmark interest rate for mortgage loans",
                "D) Rate of inflation set by the government"
            ],
            correctAnswer: "B) Rate at which the Federal Reserve lends to banks overnight"
        },
        {
            question: "What economic principle is associated with the idea that individuals seek to maximize their utility?",
            choices: [
                "A) Law of Diminishing Marginal Utility",
                "B) Law of Demand",
                "C) Law of Supply",
                "D) Law of Comparative Advantage"
            ],
            correctAnswer: "A) Law of Diminishing Marginal Utility"
        },
        {
            question: "In international trade, what does a trade surplus indicate?",
            choices: [
                "A) Exporting more than importing",
                "B) Importing more than exporting",
                "C) Balanced trade",
                "D) No international trade activity"
            ],
            correctAnswer: "A) Exporting more than importing"
        },
        {
            question: "What is the role of the World Bank in the global economy?",
            choices: [
                "A) Setting international interest rates",
                "B) Providing financial aid and loans for development projects",
                "C) Regulating global trade agreements",
                "D) Controlling currency exchange rates"
            ],
            correctAnswer: "B) Providing financial aid and loans for development projects"
        },
        {
            question: "Which economic policy aims to stimulate economic growth by increasing government spending and reducing taxes?",
            choices: [
                "A) Austerity policy",
                "B) Monetary policy",
                "C) Expansionary fiscal policy",
                "D) Supply-side economics"
            ],
            correctAnswer: "C) Expansionary fiscal policy"
        },
        {
            question: "What is the concept of 'opportunity cost' in economics?",
            choices: [
                "A) The actual cost of a good or service",
                "B) The cost of production",
                "C) The value of the next best alternative forgone",
                "D) The total cost of inputs in production"
            ],
            correctAnswer: "C) The value of the next best alternative forgone"
        },
        {
            question: "What is the primary function of central banks in a country's economy?",
            choices: [
                "A) Regulating the stock market",
                "B) Controlling inflation and monetary policy",
                "C) Implementing fiscal policy",
                "D) Distributing social welfare benefits"
            ],
            correctAnswer: "B) Controlling inflation and monetary policy"
        },
        {
            question: "In economic terms, what does the Laffer Curve illustrate?",
            choices: [
                "A) Relationship between taxation and government revenue",
                "B) Supply and demand equilibrium",
                "C) Consumer price index fluctuations",
                "D) Relationship between inflation and unemployment"
            ],
            correctAnswer: "A) Relationship between taxation and government revenue"
        },
    ];

    const fmi = [
        {
            question: "What is the primary function of a stock exchange?",
            choices: [
                "A) Regulating interest rates",
                "B) Facilitating the buying and selling of stocks",
                "C) Setting government fiscal policies",
                "D) Issuing government bonds"
            ],
            correctAnswer: "B) Facilitating the buying and selling of stocks"
        },
        {
            question: "What does the term 'Bull Market' refer to in financial markets?",
            choices: [
                "A) Period of declining stock prices",
                "B) Period of economic recession",
                "C) Period of rising stock prices",
                "D) Period of stable interest rates"
            ],
            correctAnswer: "C) Period of rising stock prices"
        },
        {
            question: "Which financial instrument represents a debt security that pays periodic interest and has a fixed maturity date?",
            choices: [
                "A) Common stock",
                "B) Preferred stock",
                "C) Corporate bond",
                "D) Treasury bill"
            ],
            correctAnswer: "C) Corporate bond"
        },
        {
            question: "What is the purpose of a futures contract in financial markets?",
            choices: [
                "A) Buying or selling currencies at spot rates",
                "B) Speculating on future interest rate movements",
                "C) Locking in the future price of an asset",
                "D) Hedging against currency fluctuations"
            ],
            correctAnswer: "C) Locking in the future price of an asset"
        },
        {
            question: "In foreign exchange markets, what does the term 'pip' stand for?",
            choices: [
                "A) Percentage of Interest Points",
                "B) Price Index for Precious metals",
                "C) Percentage in Profit",
                "D) Price Interest Point"
            ],
            correctAnswer: "D) Price Interest Point"
        },
        {
            question: "What is the role of an investment bank in financial markets?",
            choices: [
                "A) Retail banking services for individuals",
                "B) Facilitating stock trading for retail investors",
                "C) Providing financial advice and capital raising for corporations",
                "D) Issuing government securities"
            ],
            correctAnswer: "C) Providing financial advice and capital raising for corporations"
        },
        {
            question: "Which financial market is primarily involved in the issuance and trading of long-term debt securities?",
            choices: [
                "A) Money market",
                "B) Equity market",
                "C) Derivatives market",
                "D) Bond market"
            ],
            correctAnswer: "D) Bond market"
        },
        {
            question: "What is the main function of a central clearing counterparty (CCP) in derivatives markets?",
            choices: [
                "A) Facilitating direct trades between buyers and sellers",
                "B) Regulating stock exchanges",
                "C) Clearing and settling trades to reduce counterparty risk",
                "D) Speculating on commodity prices"
            ],
            correctAnswer: "C) Clearing and settling trades to reduce counterparty risk"
        },
        {
            question: "In the context of financial derivatives, what does the term 'options' refer to?",
            choices: [
                "A) Contracts to buy or sell an asset at a future date",
                "B) Contracts that require the exchange of currencies at a specified rate",
                "C) Contracts giving the holder the right, but not the obligation, to buy or sell an asset",
                "D) Contracts for the delivery of physical commodities"
            ],
            correctAnswer: "C) Contracts giving the holder the right, but not the obligation, to buy or sell an asset"
        },
        {
            question: "What is the Dow Jones Industrial Average (DJIA) used for in financial markets?",
            choices: [
                "A) Measuring market volatility",
                "B) Calculating inflation rates",
                "C) Tracking the performance of major US stocks",
                "D) Assessing interest rate movements"
            ],
            correctAnswer: "C) Tracking the performance of major US stocks"
        },
    ];

    const get = [
        {
            question: "What is GDP growth rate?",
            choices: [
                "A) The rate at which government debt increases",
                "B) The percentage increase in the country's total economic output over time",
                "C) The rate at which inflation decreases",
                "D) The level of unemployment in the country"
            ],
            correctAnswer: "B) The percentage increase in the country's total economic output over time"
        },
        {
            question: "Which factor is often used as an indicator of a country's economic health?",
            choices: [
                "A) Stock market volatility",
                "B) Consumer confidence index",
                "C) Number of public holidays",
                "D) Currency exchange rates"
            ],
            correctAnswer: "B) Consumer confidence index"
        },
        {
            question: "What does the term 'trade deficit' mean in the context of global economics?",
            choices: [
                "A) Exporting more goods than importing",
                "B) Importing more goods than exporting",
                "C) Balanced trade between two countries",
                "D) A surplus in the government budget"
            ],
            correctAnswer: "B) Importing more goods than exporting"
        },
        {
            question: "In global finance, what is the purpose of the International Monetary Fund (IMF)?",
            choices: [
                "A) Facilitating international trade agreements",
                "B) Providing financial assistance and stability to member countries",
                "C) Regulating global stock markets",
                "D) Issuing a global currency"
            ],
            correctAnswer: "B) Providing financial assistance and stability to member countries"
        },
        {
            question: "What is the significance of the Purchasing Managers' Index (PMI) in assessing global economic trends?",
            choices: [
                "A) Measures the profitability of multinational corporations",
                "B) Indicates the level of consumer spending",
                "C) Measures business activity and economic health",
                "D) Predicts changes in interest rates"
            ],
            correctAnswer: "C) Measures business activity and economic health"
        },
        {
            question: "Which economic indicator is often used to assess the overall inflationary pressure in an economy?",
            choices: [
                "A) Consumer Price Index (CPI)",
                "B) Gross Domestic Product (GDP)",
                "C) Unemployment Rate",
                "D) Stock Market Index"
            ],
            correctAnswer: "A) Consumer Price Index (CPI)"
        },
        {
            question: "What does the term 'currency devaluation' mean in global finance?",
            choices: [
                "A) Strengthening a country's currency against others",
                "B) Introducing a new currency",
                "C) Reducing the value of a country's currency in the foreign exchange market",
                "D) Pegging a currency to the gold standard"
            ],
            correctAnswer: "C) Reducing the value of a country's currency in the foreign exchange market"
        },
        {
            question: "In the context of international trade, what is protectionism?",
            choices: [
                "A) Encouraging free trade between nations",
                "B) Promoting economic globalization",
                "C) Implementing trade barriers to protect domestic industries",
                "D) Establishing a common currency for multiple countries"
            ],
            correctAnswer: "C) Implementing trade barriers to protect domestic industries"
        },
        {
            question: "What role does the World Trade Organization (WTO) play in global trade?",
            choices: [
                "A) Regulating international currency exchange rates",
                "B) Facilitating diplomatic relations between nations",
                "C) Promoting fair and open trade by reducing trade barriers",
                "D) Managing global monetary policy"
            ],
            correctAnswer: "C) Promoting fair and open trade by reducing trade barriers"
        },
        {
            question: "How does a global recession impact individual countries?",
            choices: [
                "A) Increases economic growth",
                "B) Lowers unemployment rates",
                "C) Leads to a decline in economic activity and job losses",
                "D) Boosts consumer spending"
            ],
            correctAnswer: "C) Leads to a decline in economic activity and job losses"
        },
    ];

    const gpf = [
        {
            question: "What is the primary source of revenue for most governments?",
            choices: [
                "A) Corporate taxes",
                "B) Personal income taxes",
                "C) Sales taxes",
                "D) Property taxes"
            ],
            correctAnswer: "B) Personal income taxes"
        },
        {
            question: "What does the term 'fiscal policy' refer to in government finance?",
            choices: [
                "A) Monetary control by the central bank",
                "B) Government regulation of international trade",
                "C) Government decisions on taxation and spending to influence the economy",
                "D) Policies related to environmental sustainability"
            ],
            correctAnswer: "C) Government decisions on taxation and spending to influence the economy"
        },
        {
            question: "Which type of government spending is aimed at boosting economic growth during periods of recession?",
            choices: [
                "A) Mandatory spending",
                "B) Discretionary spending",
                "C) Entitlement spending",
                "D) Expansionary spending"
            ],
            correctAnswer: "D) Expansionary spending"
        },
        {
            question: "What is the role of the Federal Reserve in the United States in terms of public finance?",
            choices: [
                "A) Setting fiscal policy",
                "B) Collecting taxes",
                "C) Regulating banks and controlling monetary policy",
                "D) Determining government expenditure"
            ],
            correctAnswer: "C) Regulating banks and controlling monetary policy"
        },
        {
            question: "What does the term 'budget deficit' mean in the context of government finance?",
            choices: [
                "A) Excess government revenue over expenditure",
                "B) Balanced budget",
                "C) Excess government expenditure over revenue",
                "D) A surplus in the government budget"
            ],
            correctAnswer: "C) Excess government expenditure over revenue"
        },
        {
            question: "What is the purpose of a sovereign wealth fund in government finance?",
            choices: [
                "A) Funding international development projects",
                "B) Providing financial aid to other countries",
                "C) Accumulating and managing a country's reserves from budget surpluses",
                "D) Financing military expenditures"
            ],
            correctAnswer: "C) Accumulating and managing a country's reserves from budget surpluses"
        },
        {
            question: "In government finance, what is 'tax incidence'?",
            choices: [
                "A) The impact of taxes on the distribution of economic resources",
                "B) The total amount of tax revenue collected by the government",
                "C) The speed at which taxes are imposed",
                "D) The process of tax assessment"
            ],
            correctAnswer: "A) The impact of taxes on the distribution of economic resources"
        },
        {
            question: "What is the main purpose of a progressive tax system?",
            choices: [
                "A) Imposing higher taxes on low-income individuals",
                "B) Imposing higher taxes on high-income individuals",
                "C) Imposing equal taxes on all income levels",
                "D) Eliminating taxes altogether"
            ],
            correctAnswer: "B) Imposing higher taxes on high-income individuals"
        },
        {
            question: "What is the difference between deficit spending and the national debt?",
            choices: [
                "A) They are synonymous terms",
                "B) Deficit spending is the excess of government expenditure over revenue, while the national debt is the cumulative total of deficits",
                "C) Deficit spending is the total amount of government debt, while the national debt is the yearly deficit",
                "D) National debt is the excess of government expenditure over revenue, while deficit spending is the cumulative total of deficits"
            ],
            correctAnswer: "B) Deficit spending is the excess of government expenditure over revenue, while the national debt is the cumulative total of deficits"
        },
        {
            question: "What is the primary purpose of a government bond?",
            choices: [
                "A) Providing funds for military operations",
                "B) Funding social welfare programs",
                "C) Raising capital for infrastructure projects",
                "D) Controlling inflation rates"
            ],
            correctAnswer: "C) Raising capital for infrastructure projects"
        },
    ];

    const fle = [
        {
            question: "What does the term 'compound interest' refer to in financial literacy?",
            choices: [
                "A) Interest calculated only on the principal amount",
                "B) Interest calculated on the total amount, including previous interest",
                "C) Interest paid in installments",
                "D) Interest paid in advance"
            ],
            correctAnswer: "B) Interest calculated on the total amount, including previous interest"
        },
        {
            question: "What is the purpose of a credit score in personal finance?",
            choices: [
                "A) Determining eligibility for government benefits",
                "B) Assessing an individual's creditworthiness",
                "C) Evaluating investment opportunities",
                "D) Calculating income tax"
            ],
            correctAnswer: "B) Assessing an individual's creditworthiness"
        },
        {
            question: "What does the term 'budget' mean in financial literacy?",
            choices: [
                "A) A plan for saving money",
                "B) A tool for tracking and managing income and expenses",
                "C) A type of investment account",
                "D) A government financial statement"
            ],
            correctAnswer: "B) A tool for tracking and managing income and expenses"
        },
        {
            question: "Why is it important to have an emergency fund in personal finance?",
            choices: [
                "A) To fund luxurious vacations",
                "B) To cover unexpected expenses and financial setbacks",
                "C) To invest in the stock market",
                "D) To purchase a home"
            ],
            correctAnswer: "B) To cover unexpected expenses and financial setbacks"
        },
        {
            question: "What is the concept of 'diversification' in investment?",
            choices: [
                "A) Putting all your money into a single investment",
                "B) Spreading investments across different asset classes to reduce risk",
                "C) Exclusively investing in foreign markets",
                "D) Focusing on short-term investments only"
            ],
            correctAnswer: "B) Spreading investments across different asset classes to reduce risk"
        },
        {
            question: "What is the purpose of a 401(k) retirement account?",
            choices: [
                "A) Funding college education",
                "B) Purchasing a home",
                "C) Saving for retirement with pre-tax dollars",
                "D) Accumulating funds for emergency expenses"
            ],
            correctAnswer: "C) Saving for retirement with pre-tax dollars"
        },
        {
            question: "What does the term 'inflation' mean in financial literacy?",
            choices: [
                "A) Increase in the supply of money",
                "B) Decrease in the overall level of prices",
                "C) Increase in the overall level of prices",
                "D) Stability in the economy"
            ],
            correctAnswer: "C) Increase in the overall level of prices"
        },
        {
            question: "What is the difference between a debit card and a credit card?",
            choices: [
                "A) Debit cards have higher interest rates",
                "B) Debit cards are not linked to a bank account",
                "C) Debit cards deduct funds directly from a bank account, while credit cards allow borrowing up to a credit limit",
                "D) Credit cards are only used for online purchases"
            ],
            correctAnswer: "C) Debit cards deduct funds directly from a bank account, while credit cards allow borrowing up to a credit limit"
        },
        {
            question: "What does the term 'ROI' stand for in financial education?",
            choices: [
                "A) Return on Investment",
                "B) Rate of Inflation",
                "C) Revenue from Operations",
                "D) Risk of Investment"
            ],
            correctAnswer: "A) Return on Investment"
        },
        {
            question: "Why is it important to read and understand financial statements?",
            choices: [
                "A) For entertainment purposes",
                "B) To impress friends with financial jargon",
                "C) To make informed financial decisions and assess the financial health of individuals or companies",
                "D) Only for accounting professionals"
            ],
            correctAnswer: "C) To make informed financial decisions and assess the financial health of individuals or companies"
        },
    ];

    const cdm = [
        {
            question: "What is a credit score used for in the context of credit and debt management?",
            choices: [
                "A) Determining eligibility for a driver's license",
                "B) Assessing an individual's creditworthiness",
                "C) Setting interest rates for savings accounts",
                "D) Calculating income tax"
            ],
            correctAnswer: "B) Assessing an individual's creditworthiness"
        },
        {
            question: "What does the term 'credit utilization ratio' mean in credit management?",
            choices: [
                "A) The amount of credit a person has",
                "B) The percentage of available credit being used",
                "C) The total amount of debt",
                "D) The length of a person's credit history"
            ],
            correctAnswer: "B) The percentage of available credit being used"
        },
        {
            question: "Why is it important to check your credit report regularly?",
            choices: [
                "A) To monitor your income levels",
                "B) To track your monthly expenses",
                "C) To identify errors or fraudulent activity",
                "D) To calculate your net worth"
            ],
            correctAnswer: "C) To identify errors or fraudulent activity"
        },
        {
            question: "What is the purpose of a grace period on a credit card?",
            choices: [
                "A) Allowing extra time to pay off the entire balance without accruing interest",
                "B) Postponing the due date for credit card payments",
                "C) Automatically increasing the credit limit",
                "D) Waiving annual fees"
            ],
            correctAnswer: "A) Allowing extra time to pay off the entire balance without accruing interest"
        },
        {
            question: "What does the term 'secured loan' mean in the context of debt management?",
            choices: [
                "A) A loan without any collateral",
                "B) A loan backed by assets, such as a car or home",
                "C) A loan with a variable interest rate",
                "D) A loan with no interest"
            ],
            correctAnswer: "B) A loan backed by assets, such as a car or home"
        },
        {
            question: "How does the debt-to-income ratio impact an individual's financial health?",
            choices: [
                "A) It has no impact on financial health",
                "B) A lower ratio indicates financial stability",
                "C) A higher ratio indicates higher creditworthiness",
                "D) A higher ratio suggests a higher risk of financial distress"
            ],
            correctAnswer: "D) A higher ratio suggests a higher risk of financial distress"
        },
        {
            question: "What is the purpose of a debt consolidation loan?",
            choices: [
                "A) Increasing the total amount of debt",
                "B) Combining multiple debts into a single loan with a lower interest rate",
                "C) Paying off only the minimum balance on credit cards",
                "D) Taking on new debt without repaying existing obligations"
            ],
            correctAnswer: "B) Combining multiple debts into a single loan with a lower interest rate"
        },
        {
            question: "Why is it important to understand the terms and conditions of credit cards and loans?",
            choices: [
                "A) To impress friends with financial knowledge",
                "B) To avoid building credit history",
                "C) To make informed financial decisions and avoid unexpected fees or penalties",
                "D) Only for financial professionals"
            ],
            correctAnswer: "C) To make informed financial decisions and avoid unexpected fees or penalties"
        },
        {
            question: "What is the consequence of making only the minimum payment on a credit card?",
            choices: [
                "A) Improved credit score",
                "B) Reduction in overall debt",
                "C) Accumulation of high-interest charges and a longer time to pay off the balance",
                "D) Lower credit limit"
            ],
            correctAnswer: "C) Accumulation of high-interest charges and a longer time to pay off the balance"
        },
        {
            question: "How can an individual improve their credit score over time?",
            choices: [
                "A) Closing all credit accounts",
                "B) Avoiding any form of credit",
                "C) Making timely payments, reducing credit card balances, and managing credit responsibly",
                "D) Applying for multiple credit cards simultaneously"
            ],
            correctAnswer: "C) Making timely payments, reducing credit card balances, and managing credit responsibly"
        },
    ];
    
    const ebf = [
        {
            question: "What does the term 'bootstrapping' mean in the context of entrepreneurship?",
            choices: [
                "A) Wearing specialized footwear",
                "B) Starting and growing a business with little or no external funding",
                "C) Using expensive software for business operations",
                "D) Partnering with other businesses for mutual benefit"
            ],
            correctAnswer: "B) Starting and growing a business with little or no external funding"
        },
        {
            question: "What is the purpose of a business plan in entrepreneurship?",
            choices: [
                "A) Outlining the company's dress code policy",
                "B) Providing a roadmap for the business, including goals, strategies, and financial projections",
                "C) Managing employee benefits",
                "D) Creating marketing materials"
            ],
            correctAnswer: "B) Providing a roadmap for the business, including goals, strategies, and financial projections"
        },
        {
            question: "What does the term 'venture capital' refer to in business finance?",
            choices: [
                "A) Capital raised by issuing bonds",
                "B) Capital obtained from personal savings",
                "C) Funding provided by investors to high-potential startups or small businesses",
                "D) Profits generated from day-to-day business operations"
            ],
            correctAnswer: "C) Funding provided by investors to high-potential startups or small businesses"
        },
        {
            question: "What is the significance of a break-even analysis in business finance?",
            choices: [
                "A) Identifying the point at which a business starts losing money",
                "B) Calculating the total revenue of a business",
                "C) Assessing the profitability of a business venture",
                "D) Determining the cost of hiring employees"
            ],
            correctAnswer: "A) Identifying the point at which a business starts losing money"
        },
        {
            question: "In business finance, what does the term 'cash flow' represent?",
            choices: [
                "A) The physical flow of cash within a business",
                "B) The net income of a business",
                "C) The total revenue generated by a business",
                "D) The movement of money in and out of a business over a specific period"
            ],
            correctAnswer: "D) The movement of money in and out of a business over a specific period"
        },
        {
            question: "What is the purpose of financial forecasting in business finance?",
            choices: [
                "A) Predicting the stock market trends",
                "B) Estimating future financial performance based on historical data",
                "C) Determining the current market value of a business",
                "D) Calculating taxes owed by a business"
            ],
            correctAnswer: "B) Estimating future financial performance based on historical data"
        },
        {
            question: "What does the term 'angel investor' mean in the context of entrepreneurship?",
            choices: [
                "A) A celestial being with wings",
                "B) An individual who provides financial backing for startups or small businesses",
                "C) A financial analyst working for a large corporation",
                "D) A business consultant specializing in marketing"
            ],
            correctAnswer: "B) An individual who provides financial backing for startups or small businesses"
        },
        {
            question: "What is the purpose of a profit and loss statement (P&L) in business finance?",
            choices: [
                "A) Tracking employee attendance",
                "B) Summarizing the revenues, costs, and expenses incurred during a specific period",
                "C) Calculating the market share of a business",
                "D) Assessing customer satisfaction"
            ],
            correctAnswer: "B) Summarizing the revenues, costs, and expenses incurred during a specific period"
        },
        {
            question: "In entrepreneurship, what does the term 'exit strategy' refer to?",
            choices: [
                "A) A plan for closing a business",
                "B) A marketing strategy for attracting new customers",
                "C) A method of product promotion",
                "D) A strategy for entering a new market"
            ],
            correctAnswer: "A) A plan for closing a business"
        },
        {
            question: "Why is risk management important for entrepreneurs?",
            choices: [
                "A) To avoid all forms of risk",
                "B) To minimize the impact of uncertainties on the business",
                "C) To eliminate competition",
                "D) To increase the level of debt in the business"
            ],
            correctAnswer: "B) To minimize the impact of uncertainties on the business"
        },
    ];
    
    const bedm = [
        {
            question: "What is the central concept of the anchoring bias in behavioral economics?",
            choices: [
                "A) The tendency to rely on the first piece of information encountered when making decisions",
                "B) A bias against new ideas",
                "C) The preference for buying anchor-shaped products",
                "D) The influence of peer pressure on decision-making"
            ],
            correctAnswer: "A) The tendency to rely on the first piece of information encountered when making decisions"
        },
        {
            question: "In behavioral economics, what is the endowment effect?",
            choices: [
                "A) The tendency to overestimate the value of what we own",
                "B) The desire for instant gratification",
                "C) The fear of losing investments",
                "D) The preference for collective decision-making"
            ],
            correctAnswer: "A) The tendency to overestimate the value of what we own"
        },
        {
            question: "What does the term 'loss aversion' mean in the context of behavioral economics?",
            choices: [
                "A) Aversion to financial losses",
                "B) The tendency to prefer small losses over larger gains",
                "C) The fear of losing investments",
                "D) The inclination to avoid making decisions"
            ],
            correctAnswer: "B) The tendency to prefer small losses over larger gains"
        },
        {
            question: "What is the confirmation bias in decision-making?",
            choices: [
                "A) The tendency to seek information that confirms one's preexisting beliefs",
                "B) The bias against confirming information",
                "C) The preference for group decision-making",
                "D) The aversion to change"
            ],
            correctAnswer: "A) The tendency to seek information that confirms one's preexisting beliefs"
        },
        {
            question: "In behavioral economics, what is hyperbolic discounting?",
            choices: [
                "A) The tendency to exaggerate the importance of discounts",
                "B) The preference for immediate rewards over larger delayed rewards",
                "C) The aversion to discount stores",
                "D) The tendency to overvalue future benefits"
            ],
            correctAnswer: "B) The preference for immediate rewards over larger delayed rewards"
        },
        {
            question: "What does the term 'nudge' mean in the context of behavioral economics?",
            choices: [
                "A) A gentle push",
                "B) A form of punishment",
                "C) A rapid decision-making process",
                "D) A bias against certain choices"
            ],
            correctAnswer: "A) A gentle push"
        },
        {
            question: "What is the availability heuristic in decision-making?",
            choices: [
                "A) The tendency to rely on readily available information",
                "B) A bias against popular choices",
                "C) The preference for rare events",
                "D) The aversion to heuristic decision-making"
            ],
            correctAnswer: "A) The tendency to rely on readily available information"
        },
        {
            question: "What is the framing effect in behavioral economics?",
            choices: [
                "A) The tendency to prefer framed artwork",
                "B) The influence of the way information is presented on decision-making",
                "C) The aversion to framed questions",
                "D) The inclination to avoid making decisions"
            ],
            correctAnswer: "B) The influence of the way information is presented on decision-making"
        },
        {
            question: "In behavioral economics, what is prospect theory?",
            choices: [
                "A) A theory about the future prospects of an economy",
                "B) A theory that describes how people make choices under uncertainty",
                "C) A theory about the value of financial prospects",
                "D) A theory promoting optimistic decision-making"
            ],
            correctAnswer: "B) A theory that describes how people make choices under uncertainty"
        },
        {
            question: "What is the paradox of choice in behavioral economics?",
            choices: [
                "A) The preference for limited choices",
                "B) The aversion to decision-making",
                "C) The idea that too many choices can lead to decision paralysis",
                "D) The inclination to choose the most expensive option"
            ],
            correctAnswer: "C) The idea that too many choices can lead to decision paralysis"
        },
    ];
    
    const repi = [
        {
            question: "What is the primary factor influencing property values in real estate?",
            choices: [
                "A) Property size",
                "B) Location",
                "C) Architectural style",
                "D) Interior design"
            ],
            correctAnswer: "B) Location"
        },
        {
            question: "What does the term 'mortgage' refer to in real estate?",
            choices: [
                "A) A legal document outlining property boundaries",
                "B) A type of insurance for homeowners",
                "C) A loan used to purchase real estate, with the property as collateral",
                "D) Monthly rental payments"
            ],
            correctAnswer: "C) A loan used to purchase real estate, with the property as collateral"
        },
        {
            question: "In real estate, what is the role of a real estate agent?",
            choices: [
                "A) Property appraiser",
                "B) Mortgage lender",
                "C) Facilitator in buying, selling, or renting properties",
                "D) Property inspector"
            ],
            correctAnswer: "C) Facilitator in buying, selling, or renting properties"
        },
        {
            question: "What is the purpose of a home inspection in real estate transactions?",
            choices: [
                "A) Checking the homeowner's credit history",
                "B) Evaluating the property's structural and mechanical condition",
                "C) Appraising the property value",
                "D) Negotiating the terms of the mortgage"
            ],
            correctAnswer: "B) Evaluating the property's structural and mechanical condition"
        },
        {
            question: "What does the term 'capital appreciation' mean in property investment?",
            choices: [
                "A) Increase in property value over time",
                "B) Monthly rental income",
                "C) Depreciation of property value",
                "D) Property taxes"
            ],
            correctAnswer: "A) Increase in property value over time"
        },
        {
            question: "In real estate, what is the 1% rule used for?",
            choices: [
                "A) Determining property tax rates",
                "B) Evaluating potential rental property investments",
                "C) Estimating the cost of property insurance",
                "D) Assessing property maintenance costs"
            ],
            correctAnswer: "B) Evaluating potential rental property investments"
        },
        {
            question: "What is a 'fixer-upper' in the context of real estate?",
            choices: [
                "A) A real estate agent specializing in renovations",
                "B) A property in need of repairs or renovations",
                "C) A type of mortgage for home improvements",
                "D) A property with high market value"
            ],
            correctAnswer: "B) A property in need of repairs or renovations"
        },
        {
            question: "What is a 'down payment' in property transactions?",
            choices: [
                "A) Payment for property maintenance",
                "B) The initial payment made when purchasing a property, typically a percentage of the total price",
                "C) Monthly mortgage payment",
                "D) Payment for property taxes"
            ],
            correctAnswer: "B) The initial payment made when purchasing a property, typically a percentage of the total price"
        },
        {
            question: "What does the term 'property title' mean in real estate?",
            choices: [
                "A) A book about property management",
                "B) Legal ownership of a property",
                "C) A decorative element in home design",
                "D) The property's physical boundaries"
            ],
            correctAnswer: "B) Legal ownership of a property"
        },
        {
            question: "What is the purpose of property insurance in real estate?",
            choices: [
                "A) Increasing property value",
                "B) Protecting against potential financial losses due to damage or liability issues",
                "C) Reducing property taxes",
                "D) Facilitating property transfers"
            ],
            correctAnswer: "B) Protecting against potential financial losses due to damage or liability issues"
        },
    ];
    
    const tfp = [
        {
            question: "What is the purpose of tax deductions in financial planning?",
            choices: [
                "A) Increasing the overall tax liability",
                "B) Reducing taxable income and lowering the amount owed in taxes",
                "C) Encouraging excessive spending",
                "D) Expediting tax filing"
            ],
            correctAnswer: "B) Reducing taxable income and lowering the amount owed in taxes"
        },
        {
            question: "What is the difference between a tax credit and a tax deduction?",
            choices: [
                "A) They are identical terms",
                "B) A tax credit directly reduces the amount of taxes owed, while a tax deduction reduces taxable income",
                "C) A tax deduction is only available to businesses, while a tax credit is for individuals",
                "D) A tax credit increases taxable income, while a tax deduction lowers taxes owed"
            ],
            correctAnswer: "B) A tax credit directly reduces the amount of taxes owed, while a tax deduction reduces taxable income"
        },
        {
            question: "In financial planning, what is the purpose of an Individual Retirement Account (IRA)?",
            choices: [
                "A) Generating monthly income",
                "B) Providing insurance coverage",
                "C) Saving for retirement with potential tax advantages",
                "D) Accumulating funds for emergency expenses"
            ],
            correctAnswer: "C) Saving for retirement with potential tax advantages"
        },
        {
            question: "What does the term 'tax liability' refer to in financial planning?",
            choices: [
                "A) The total amount of income earned",
                "B) The potential tax refunds",
                "C) The amount of taxes owed to the government",
                "D) The tax rate applied to income"
            ],
            correctAnswer: "C) The amount of taxes owed to the government"
        },
        {
            question: "What is the purpose of tax planning in financial management?",
            choices: [
                "A) Maximizing tax liability",
                "B) Minimizing tax liability within the legal framework",
                "C) Avoiding all forms of taxation",
                "D) Hiding income from the government"
            ],
            correctAnswer: "B) Minimizing tax liability within the legal framework"
        },
        {
            question: "What is the significance of the filing status in tax returns?",
            choices: [
                "A) It determines the taxpayer's political affiliation",
                "B) It influences the amount of taxes owed or refunded",
                "C) It affects the taxpayer's credit score",
                "D) It is irrelevant in tax calculations"
            ],
            correctAnswer: "B) It influences the amount of taxes owed or refunded"
        },
        {
            question: "What is the purpose of a W-4 form in the United States tax system?",
            choices: [
                "A) Reporting income from self-employment",
                "B) Claiming tax credits",
                "C) Withholding the correct amount of federal income tax from an employee's paycheck",
                "D) Calculating property taxes"
            ],
            correctAnswer: "C) Withholding the correct amount of federal income tax from an employee's paycheck"
        },
        {
            question: "What is the purpose of a tax refund in financial planning?",
            choices: [
                "A) A bonus payment from the government",
                "B) A loan with no repayment required",
                "C) Returning excess taxes that were overpaid during the year",
                "D) A tax credit applied to future tax years"
            ],
            correctAnswer: "C) Returning excess taxes that were overpaid during the year"
        },
        {
            question: "In financial planning, what is the purpose of a 529 plan?",
            choices: [
                "A) Funding travel expenses",
                "B) Saving for retirement",
                "C) Saving for educational expenses with potential tax advantages",
                "D) Managing investment portfolios"
            ],
            correctAnswer: "C) Saving for educational expenses with potential tax advantages"
        },
        {
            question: "What is the purpose of estate planning in relation to taxes?",
            choices: [
                "A) Reducing the amount of income earned",
                "B) Minimizing estate taxes and ensuring the smooth transfer of assets to heirs",
                "C) Maximizing tax liability",
                "D) Avoiding tax planning altogether"
            ],
            correctAnswer: "B) Minimizing estate taxes and ensuring the smooth transfer of assets to heirs"
        },
    ];
    
    const frc = [
        {
            question: "What is the purpose of Know Your Customer (KYC) regulations in the financial industry?",
            choices: [
                "A) Identifying customers by their appearance",
                "B) Ensuring customers have a comprehensive financial background",
                "C) Verifying the identity of customers to prevent fraud and illegal activities",
                "D) Assessing customers' knowledge of financial products"
            ],
            correctAnswer: "C) Verifying the identity of customers to prevent fraud and illegal activities"
        },
        {
            question: "What is Anti-Money Laundering (AML) compliance in financial institutions?",
            choices: [
                "A) Allowing unlimited money transfers",
                "B) Regulations against financial institutions providing loans",
                "C) Measures to detect and prevent money laundering activities",
                "D) Providing financial support to criminal organizations"
            ],
            correctAnswer: "C) Measures to detect and prevent money laundering activities"
        },
        {
            question: "What does the term 'Sarbanes-Oxley Act' (SOX) address in financial regulations?",
            choices: [
                "A) Consumer protection in the financial industry",
                "B) Corporate governance and financial disclosure",
                "C) Taxation of financial transactions",
                "D) International trade regulations"
            ],
            correctAnswer: "B) Corporate governance and financial disclosure"
        },
        {
            question: "What is the purpose of the Dodd-Frank Wall Street Reform and Consumer Protection Act?",
            choices: [
                "A) Deregulating financial markets",
                "B) Encouraging risky financial practices",
                "C) Reforming financial regulations to prevent another financial crisis",
                "D) Promoting insider trading"
            ],
            correctAnswer: "C) Reforming financial regulations to prevent another financial crisis"
        },
        {
            question: "What is the role of the Securities and Exchange Commission (SEC) in financial regulation?",
            choices: [
                "A) Issuing banknotes and coins",
                "B) Enforcing regulations to protect investors and maintain fair and efficient markets",
                "C) Regulating international trade",
                "D) Managing the country's fiscal policy"
            ],
            correctAnswer: "B) Enforcing regulations to protect investors and maintain fair and efficient markets"
        },
        {
            question: "What is the Financial Action Task Force (FATF) responsible for in the realm of financial regulations?",
            choices: [
                "A) Setting interest rates",
                "B) Combating terrorist financing and money laundering globally",
                "C) Regulating stock exchanges",
                "D) Managing central bank reserves"
            ],
            correctAnswer: "B) Combating terrorist financing and money laundering globally"
        },
        {
            question: "What does the term 'fiduciary duty' mean in financial regulations?",
            choices: [
                "A) Duty to maximize profits at any cost",
                "B) Duty to act in the best interest of clients and avoid conflicts of interest",
                "C) Duty to disclose confidential information",
                "D) Duty to promote risky investments"
            ],
            correctAnswer: "B) Duty to act in the best interest of clients and avoid conflicts of interest"
        },
        {
            question: "What is Basel III in the context of banking regulations?",
            choices: [
                "A) A system for categorizing financial products",
                "B) Regulations focused on environmental sustainability",
                "C) International regulatory framework for banks to maintain financial stability",
                "D) Regulations against online banking services"
            ],
            correctAnswer: "C) International regulatory framework for banks to maintain financial stability"
        },
        {
            question: "What is the role of the Consumer Financial Protection Bureau (CFPB) in financial regulations?",
            choices: [
                "A) Promoting risky financial products",
                "B) Protecting consumers from unfair and deceptive financial practices",
                "C) Regulating international trade agreements",
                "D) Managing government spending"
            ],
            correctAnswer: "B) Protecting consumers from unfair and deceptive financial practices"
        },
        {
            question: "What does the term 'compliance officer' refer to in financial institutions?",
            choices: [
                "A) Officer responsible for maximizing profits",
                "B) Officer overseeing corporate events",
                "C) Officer ensuring adherence to laws and regulations",
                "D) Officer responsible for financial audits"
            ],
            correctAnswer: "C) Officer ensuring adherence to laws and regulations"
        },
    ];
    
    const tf = [
        {
            question: "What is blockchain technology, and how is it relevant to finance?",
            choices: [
                "A) A type of computer programming language",
                "B) A decentralized and distributed ledger system used for secure and transparent financial transactions",
                "C) A technology for virtual reality in financial simulations",
                "D) An algorithm for predicting stock prices"
            ],
            correctAnswer: "B) A decentralized and distributed ledger system used for secure and transparent financial transactions"
        },
        {
            question: "What is the purpose of artificial intelligence (AI) in the financial industry?",
            choices: [
                "A) Designing financial logos",
                "B) Automating repetitive tasks, enhancing fraud detection, and improving customer service",
                "C) Creating virtual reality simulations for financial markets",
                "D) Decoding complex financial regulations"
            ],
            correctAnswer: "B) Automating repetitive tasks, enhancing fraud detection, and improving customer service"
        },
        {
            question: "How does the term 'fintech' relate to the intersection of technology and finance?",
            choices: [
                "A) A new type of financial currency",
                "B) Financial technologies encompassing innovations in banking, payments, and financial services",
                "C) A technology for analyzing fine art investments",
                "D) A technique for forecasting economic trends"
            ],
            correctAnswer: "B) Financial technologies encompassing innovations in banking, payments, and financial services"
        },
        {
            question: "What is the role of cryptocurrency in the financial landscape?",
            choices: [
                "A) A physical form of currency",
                "B) A decentralized digital currency using cryptography for secure financial transactions",
                "C) A type of traditional stock",
                "D) A currency backed by a central government"
            ],
            correctAnswer: "B) A decentralized digital currency using cryptography for secure financial transactions"
        },
        {
            question: "How does machine learning contribute to financial analysis and decision-making?",
            choices: [
                "A) Learning financial theories by memorization",
                "B) Automating financial calculations",
                "C) Conducting physical market research",
                "D) Replacing human decision-makers in financial institutions"
            ],
            correctAnswer: "B) Automating financial calculations"
        },
        {
            question: "What is the significance of cloud computing in the financial industry?",
            choices: [
                "A) Predicting weather patterns affecting financial markets",
                "B) Storing and accessing financial data and applications over the internet",
                "C) A method for calculating compound interest",
                "D) Managing physical infrastructure in financial institutions"
            ],
            correctAnswer: "B) Storing and accessing financial data and applications over the internet"
        },
        {
            question: "How do robo-advisors utilize technology in the field of financial advising?",
            choices: [
                "A) Human advisors who specialize in robotics investments",
                "B) Automated platforms using algorithms to provide financial advice and investment management",
                "C) Advisors specializing in ancient robot civilizations",
                "D) Advisors trained in virtual reality financial simulations"
            ],
            correctAnswer: "B) Automated platforms using algorithms to provide financial advice and investment management"
        },
        {
            question: "What is the concept of RegTech in the context of technology and finance?",
            choices: [
                "A) A type of robot technology",
                "B) Technology solutions designed to assist financial institutions in meeting regulatory compliance requirements",
                "C) A technique for regulating financial markets",
                "D) A form of financial technology competition"
            ],
            correctAnswer: "B) Technology solutions designed to assist financial institutions in meeting regulatory compliance requirements"
        },
        {
            question: "How does cybersecurity play a crucial role in the financial sector?",
            choices: [
                "A) A technology for predicting stock market crashes",
                "B) Protecting financial institutions and their customers from unauthorized access, attacks, and data breaches",
                "C) A method for developing financial mobile apps",
                "D) Analyzing economic trends through computer algorithms"
            ],
            correctAnswer: "B) Protecting financial institutions and their customers from unauthorized access, attacks, and data breaches"
        },
        {
            question: "What is the impact of quantum computing on financial modeling and analysis?",
            choices: [
                "A) No impact on financial operations",
                "B) Enhancing the speed and complexity of financial calculations and simulations",
                "C) Replacing traditional financial instruments",
                "D) Creating physical models for financial planning"
            ],
            correctAnswer: "B) Enhancing the speed and complexity of financial calculations and simulations"
        },
    ];
    
    const sfe = [
        {
            question: "What does ESG stand for in the context of sustainable finance?",
            choices: [
                "A) Economic, Social, Global",
                "B) Environmental, Security, Governance",
                "C) Ethical, Sustainability, Government",
                "D) Environmental, Social, Governance"
            ],
            correctAnswer: "D) Environmental, Social, Governance"
        },
        {
            question: "How does sustainable finance differ from traditional finance?",
            choices: [
                "A) Sustainable finance focuses only on environmental issues",
                "B) Sustainable finance considers environmental, social, and governance factors alongside financial returns",
                "C) Traditional finance ignores ethical considerations",
                "D) Sustainable finance only supports socially responsible investments"
            ],
            correctAnswer: "B) Sustainable finance considers environmental, social, and governance factors alongside financial returns"
        },
        {
            question: "What is the purpose of the United Nations Principles for Responsible Investment (UN PRI) in sustainable finance?",
            choices: [
                "A) Promoting irresponsible investments",
                "B) Establishing guidelines for incorporating ESG factors into investment decisions",
                "C) Encouraging high-risk financial ventures",
                "D) Ignoring environmental and social concerns in finance"
            ],
            correctAnswer: "B) Establishing guidelines for incorporating ESG factors into investment decisions"
        },
        {
            question: "What does the term 'carbon footprint' mean in the context of sustainable finance?",
            choices: [
                "A) A measure of shoe size in environmental terms",
                "B) The total greenhouse gas emissions caused by an individual, organization, or product",
                "C) A financial metric for carbon-intensive industries",
                "D) A measure of financial risk in climate-related investments"
            ],
            correctAnswer: "B) The total greenhouse gas emissions caused by an individual, organization, or product"
        },
        {
            question: "How does divestment contribute to sustainable finance?",
            choices: [
                "A) Encouraging investments in fossil fuels",
                "B) Discouraging investments in socially responsible companies",
                "C) Selling off investments in industries that are harmful to the environment or society",
                "D) Ignoring financial returns in investment decisions"
            ],
            correctAnswer: "C) Selling off investments in industries that are harmful to the environment or society"
        },
        {
            question: "What is the role of the Sustainability Accounting Standards Board (SASB) in sustainable finance?",
            choices: [
                "A) Setting accounting standards for environmental organizations",
                "B) Developing guidelines for financial sustainability reporting by companies",
                "C) Ignoring the importance of accounting in finance",
                "D) Promoting unsustainable business practices"
            ],
            correctAnswer: "B) Developing guidelines for financial sustainability reporting by companies"
        },
        {
            question: "How does impact investing contribute to sustainable finance?",
            choices: [
                "A) Focusing solely on financial returns without considering social or environmental impact",
                "B) Investing in projects or companies with the intention of generating positive, measurable social or environmental impact",
                "C) Supporting harmful industries for short-term gains",
                "D) Ignoring the broader implications of financial decisions"
            ],
            correctAnswer: "B) Investing in projects or companies with the intention of generating positive, measurable social or environmental impact"
        },
        {
            question: "What is the triple bottom line in sustainable finance?",
            choices: [
                "A) Emphasizing only financial profits",
                "B) Balancing financial, social, and environmental performance",
                "C) Ignoring social and environmental concerns for maximum financial gains",
                "D) Focusing solely on environmental impact"
            ],
            correctAnswer: "B) Balancing financial, social, and environmental performance"
        },
        {
            question: "How does shareholder advocacy play a role in sustainable finance?",
            choices: [
                "A) Encouraging shareholders to prioritize financial returns over ESG factors",
                "B) Advocating for the rights of irresponsible corporations",
                "C) Engaging with companies to influence their behavior on ESG issues",
                "D) Ignoring the voice of shareholders in financial decision-making"
            ],
            correctAnswer: "C) Engaging with companies to influence their behavior on ESG issues"
        },
        {
            question: "What is the significance of the Global Reporting Initiative (GRI) in sustainable finance?",
            choices: [
                "A) Promoting secretive financial reporting",
                "B) Developing guidelines for sustainability reporting by organizations",
                "C) Encouraging companies to avoid reporting on environmental and social practices",
                "D) Ignoring global standards in financial reporting"
            ],
            correctAnswer: "B) Developing guidelines for sustainability reporting by organizations"
        },
    ];
    
    const irm = [
        {
            question: "What is the primary purpose of insurance in risk management?",
            choices: [
                "A) Maximizing profits for insurance companies",
                "B) Eliminating all types of risks",
                "C) Transferring financial risk from an individual or business to an insurance company",
                "D) Avoiding the purchase of insurance altogether"
            ],
            correctAnswer: "C) Transferring financial risk from an individual or business to an insurance company"
        },
        {
            question: "What is the role of underwriting in the insurance industry?",
            choices: [
                "A) Selling insurance policies",
                "B) Assessing and evaluating risks to determine policy terms and premiums",
                "C) Managing claims and compensations",
                "D) Promoting insurance products to the public"
            ],
            correctAnswer: "B) Assessing and evaluating risks to determine policy terms and premiums"
        },
        {
            question: "How does a deductible work in insurance policies?",
            choices: [
                "A) The amount paid by the insurance company for a claim",
                "B) The total cost of an insurance policy",
                "C) The portion of a claim that the policyholder must pay before the insurance coverage kicks in",
                "D) A discount on insurance premiums"
            ],
            correctAnswer: "C) The portion of a claim that the policyholder must pay before the insurance coverage kicks in"
        },
        {
            question: "What is the purpose of reinsurance in the insurance industry?",
            choices: [
                "A) Selling insurance policies internationally",
                "B) Insuring against risks that exceed an insurance company's capacity",
                "C) Providing insurance to individuals without assessing risks",
                "D) Exclusively insuring high-risk individuals"
            ],
            correctAnswer: "B) Insuring against risks that exceed an insurance company's capacity"
        },
        {
            question: "How does the concept of 'risk pooling' work in insurance?",
            choices: [
                "A) Sharing profits among insurance companies",
                "B) Combining risks from multiple policyholders to spread the financial impact of potential losses",
                "C) Ignoring risk factors in insurance calculations",
                "D) Isolating risks within individual policies"
            ],
            correctAnswer: "B) Combining risks from multiple policyholders to spread the financial impact of potential losses"
        },
        {
            question: "What is the purpose of liability insurance?",
            choices: [
                "A) Insuring against damage to one's own property",
                "B) Providing coverage for injuries or damage to others for which the insured is legally responsible",
                "C) Exclusively covering medical expenses",
                "D) Insuring only against natural disasters"
            ],
            correctAnswer: "B) Providing coverage for injuries or damage to others for which the insured is legally responsible"
        },
        {
            question: "How does the concept of 'actuary' contribute to insurance and risk management?",
            choices: [
                "A) Selling insurance policies",
                "B) Calculating and analyzing risks to determine insurance premiums and reserves",
                "C) Managing claims and compensations",
                "D) Advertising insurance products"
            ],
            correctAnswer: "B) Calculating and analyzing risks to determine insurance premiums and reserves"
        },
        {
            question: "What does the term 'exclusion' mean in insurance policies?",
            choices: [
                "A) A discount on insurance premiums",
                "B) Conditions not covered by the insurance policy",
                "C) A clause allowing policyholders to cancel coverage at any time",
                "D) The total amount paid by the insurance company for a claim"
            ],
            correctAnswer: "B) Conditions not covered by the insurance policy"
        },
        {
            question: "How does a premium differ from a deductible in insurance?",
            choices: [
                "A) Premium is the portion of a claim that the policyholder must pay, while deductible is the total cost of an insurance policy",
                "B) Premium is the discount on insurance premiums, while deductible is the total amount paid by the insurance company for a claim",
                "C) Premium is the portion of a claim that the policyholder must pay, while deductible is the total cost of an insurance policy",
                "D) Premium is the total cost of an insurance policy, while deductible is the portion of a claim that the policyholder must pay"
            ],
            correctAnswer: "D) Premium is the total cost of an insurance policy, while deductible is the portion of a claim that the policyholder must pay"
        },
        {
            question: "What is the purpose of a risk management plan in businesses?",
            choices: [
                "A) Avoiding all types of risks",
                "B) Ignoring potential risks in business operations",
                "C) Identifying, assessing, and managing potential risks to minimize their impact on business objectives",
                "D) Only focusing on financial risks"
            ],
            correctAnswer: "C) Identifying, assessing, and managing potential risks to minimize their impact on business objectives"
        },
    ];
    
    const fhec= [
        {
            question: "What was the primary cause of the Great Depression in the 1930s?",
            choices: [
                "A) Overregulation of financial markets",
                "B) Excessive government spending",
                "C) The stock market crash of 1929 and widespread bank failures",
                "D) Rapid economic growth"
            ],
            correctAnswer: "C) The stock market crash of 1929 and widespread bank failures"
        },
        {
            question: "What event is often considered the starting point of the Global Financial Crisis (GFC) in 2008?",
            choices: [
                "A) Collapse of the dot-com bubble",
                "B) Subprime mortgage crisis",
                "C) Asian financial crisis",
                "D) Oil price shock"
            ],
            correctAnswer: "B) Subprime mortgage crisis"
        },
        {
            question: "What is the term 'Black Tuesday' associated with in financial history?",
            choices: [
                "A) The collapse of Lehman Brothers",
                "B) The 1929 stock market crash",
                "C) The 1987 stock market crash",
                "D) The beginning of the Great Depression"
            ],
            correctAnswer: "B) The 1929 stock market crash"
        },
        {
            question: "How did the Bretton Woods Agreement of 1944 contribute to post-World War II economic stability?",
            choices: [
                "A) By promoting isolationist economic policies",
                "B) By establishing fixed exchange rates and the International Monetary Fund (IMF)",
                "C) By encouraging competitive devaluations",
                "D) By advocating for free-floating exchange rates"
            ],
            correctAnswer: "B) By establishing fixed exchange rates and the International Monetary Fund (IMF)"
        },
        {
            question: "What role did the Plaza Accord of 1985 play in global finance?",
            choices: [
                "A) Leading to the formation of the European Union",
                "B) Stabilizing oil prices",
                "C) Coordinating efforts to depreciate the US dollar against other major currencies",
                "D) Triggering the Latin American debt crisis"
            ],
            correctAnswer: "C) Coordinating efforts to depreciate the US dollar against other major currencies"
        },
        {
            question: "What was the impact of the 1970s oil crisis on the global economy?",
            choices: [
                "A) Decreasing inflation rates",
                "B) Fueling economic growth in oil-producing countries",
                "C) Causing stagflation with high inflation and stagnant economic growth",
                "D) Leading to a surplus in global oil supply"
            ],
            correctAnswer: "C) Causing stagflation with high inflation and stagnant economic growth"
        },
        {
            question: "How did the Tulip Mania of the 17th century contribute to financial history?",
            choices: [
                "A) Establishing the first central bank",
                "B) Leading to the collapse of the Dutch economy",
                "C) Demonstrating the dangers of speculative bubbles",
                "D) Introducing modern banking practices"
            ],
            correctAnswer: "C) Demonstrating the dangers of speculative bubbles"
        },
        {
            question: "What economic phenomenon is associated with the term 'stagflation'?",
            choices: [
                "A) Rapid economic growth and low inflation",
                "B) High unemployment and deflation",
                "C) Stagnant economic growth and high inflation",
                "D) Low unemployment and high economic growth"
            ],
            correctAnswer: "C) Stagnant economic growth and high inflation"
        },
        {
            question: "How did the Long-Term Capital Management (LTCM) crisis in 1998 impact financial markets?",
            choices: [
                "A) Leading to the establishment of the European Union",
                "B) Triggering the dot-com bubble",
                "C) Causing widespread panic and requiring a bailout to prevent a broader financial collapse",
                "D) Stabilizing exchange rates globally"
            ],
            correctAnswer: "C) Causing widespread panic and requiring a bailout to prevent a broader financial collapse"
        },
        {
            question: "What is the concept of 'too big to fail' in the context of financial history?",
            choices: [
                "A) The idea that no financial institution is too large to face bankruptcy",
                "B) The concept of preventing banks from becoming too large",
                "C) The belief that small banks are more resilient in economic downturns",
                "D) The idea that certain financial institutions are so important that their failure could have catastrophic effects on the economy, justifying government intervention"
            ],
            correctAnswer: "D) The idea that certain financial institutions are so important that their failure could have catastrophic effects on the economy, justifying government intervention"
        },
    ];
    
    const ipms = [
        {
            question: "What is the primary focus of behavioral finance?",
            choices: [
                "A) Technical analysis of stock charts",
                "B) Studying the psychological factors influencing financial decision-making",
                "C) Analyzing economic indicators",
                "D) Forecasting market trends based on historical data"
            ],
            correctAnswer: "B) Studying the psychological factors influencing financial decision-making"
        },
        {
            question: "What does the term 'herding behavior' refer to in investment psychology?",
            choices: [
                "A) Independent decision-making by investors",
                "B) Following the crowd without independent analysis",
                "C) A strategy for managing investment portfolios",
                "D) The tendency to hoard physical assets"
            ],
            correctAnswer: "B) Following the crowd without independent analysis"
        },
        {
            question: "How does the 'fear of missing out' (FOMO) impact investment decisions?",
            choices: [
                "A) Encouraging thorough research before making investment decisions",
                "B) Discouraging impulsive decision-making based on market trends",
                "C) Leading investors to make decisions out of fear of missing potential profits",
                "D) Ignoring market sentiment in investment strategies"
            ],
            correctAnswer: "C) Leading investors to make decisions out of fear of missing potential profits"
        },
        {
            question: "What is the 'anchoring bias' in investment psychology?",
            choices: [
                "A) The tendency to overreact to short-term market fluctuations",
                "B) Relying too heavily on the first piece of information encountered when making decisions",
                "C) Having a stable and unwavering investment strategy",
                "D) Ignoring past performance in investment analysis"
            ],
            correctAnswer: "B) Relying too heavily on the first piece of information encountered when making decisions"
        },
        {
            question: "How does overconfidence affect investment behavior?",
            choices: [
                "A) Encouraging cautious and conservative investment strategies",
                "B) Discouraging investors from taking risks",
                "C) Leading to excessive trading and underestimating risks",
                "D) Ignoring market trends in decision-making"
            ],
            correctAnswer: "C) Leading to excessive trading and underestimating risks"
        },
        {
            question: "What is the role of 'confirmation bias' in investment decisions?",
            choices: [
                "A) Seeking information that contradicts one's existing beliefs",
                "B) Making decisions based on objective analysis",
                "C) Preferring information that confirms one's preexisting beliefs",
                "D) Ignoring market sentiment in decision-making"
            ],
            correctAnswer: "C) Preferring information that confirms one's preexisting beliefs"
        },
        {
            question: "How does the 'recency bias' influence investor behavior?",
            choices: [
                "A) Giving equal weight to all historical data",
                "B) Focusing too much on recent events and extrapolating them into the future",
                "C) Ignoring recent market trends in decision-making",
                "D) Analyzing market trends without considering historical data"
            ],
            correctAnswer: "B) Focusing too much on recent events and extrapolating them into the future"
        },
        {
            question: "What is the concept of 'loss aversion' in investment psychology?",
            choices: [
                "A) Embracing losses as a natural part of investing",
                "B) The tendency to prefer avoiding losses rather than acquiring equivalent gains",
                "C) Encouraging investors to take significant risks",
                "D) Ignoring the impact of losses on investment portfolios"
            ],
            correctAnswer: "B) The tendency to prefer avoiding losses rather than acquiring equivalent gains"
        },
        {
            question: "How does the 'mental accounting' concept impact investment decision-making?",
            choices: [
                "A) Ignoring the psychological aspects of investing",
                "B) Treating different investments separately rather than as part of an overall portfolio",
                "C) Focusing only on financial ratios and performance metrics",
                "D) Avoiding emotional reactions to market fluctuations"
            ],
            correctAnswer: "B) Treating different investments separately rather than as part of an overall portfolio"
        },
        {
            question: "What is the role of 'regret aversion' in investment psychology?",
            choices: [
                "A) Embracing regrets as learning opportunities",
                "B) Avoiding making decisions that may result in future regrets",
                "C) Encouraging investors to take risks without considering potential regrets",
                "D) Ignoring the emotional impact of regrets in investment strategies"
            ],
            correctAnswer: "B) Avoiding making decisions that may result in future regrets"
        },
    ];
    
    const ai = [
        {
            question: "What characterizes an investment as 'alternative'?",
            choices: [
                "A) Investments that are only available to a select group of investors",
                "B) Investments that are not considered traditional stocks, bonds, or cash",
                "C) Investments with guaranteed high returns",
                "D) Investments exclusively in emerging markets"
            ],
            correctAnswer: "B) Investments that are not considered traditional stocks, bonds, or cash"
        },
        {
            question: "What is a common feature of hedge funds as alternative investments?",
            choices: [
                "A) Low-risk investment strategies",
                "B) Open to all investors",
                "C) Active management and flexibility in investment strategies",
                "D) Fixed and guaranteed returns"
            ],
            correctAnswer: "C) Active management and flexibility in investment strategies"
        },
        {
            question: "How does private equity differ from public equity?",
            choices: [
                "A) Private equity is only accessible to institutional investors",
                "B) Private equity involves investments in publicly traded companies",
                "C) Public equity is riskier than private equity",
                "D) Private equity involves investments in non-publicly traded companies"
            ],
            correctAnswer: "D) Private equity involves investments in non-publicly traded companies"
        },
        {
            question: "What is the purpose of including commodities in an alternative investment portfolio?",
            choices: [
                "A) To provide fixed income",
                "B) To hedge against inflation and diversify the portfolio",
                "C) To guarantee high returns",
                "D) To reduce investment risk"
            ],
            correctAnswer: "B) To hedge against inflation and diversify the portfolio"
        },
        {
            question: "What is a Real Estate Investment Trust (REIT) in alternative investments?",
            choices: [
                "A) An investment exclusively in residential real estate",
                "B) A type of hedge fund",
                "C) A publicly traded company that owns and manages income-generating real estate",
                "D) An investment limited to commercial real estate"
            ],
            correctAnswer: "C) A publicly traded company that owns and manages income-generating real estate"
        },
        {
            question: "What role do collectibles, such as art or rare coins, play in alternative investments?",
            choices: [
                "A) Guaranteed appreciation in value",
                "B) Diversification and potential capital appreciation",
                "C) High liquidity",
                "D) Exclusively for personal enjoyment"
            ],
            correctAnswer: "B) Diversification and potential capital appreciation"
        },
        {
            question: "How do cryptocurrency investments fit into the category of alternative investments?",
            choices: [
                "A) Cryptocurrencies are traditional investments",
                "B) Cryptocurrencies are not considered alternative investments",
                "C) Cryptocurrencies are highly regulated by governments",
                "D) Cryptocurrencies are non-traditional and have high volatility"
            ],
            correctAnswer: "D) Cryptocurrencies are non-traditional and have high volatility"
        },
        {
            question: "What is the concept of impact investing in alternative investments?",
            choices: [
                "A) Investing with the sole goal of maximizing financial returns",
                "B) Investing in companies that prioritize environmental and social goals alongside financial returns",
                "C) Exclusively investing in high-risk ventures",
                "D) Ignoring ethical considerations in investment decisions"
            ],
            correctAnswer: "B) Investing in companies that prioritize environmental and social goals alongside financial returns"
        },
        {
            question: "How do venture capital investments contribute to alternative investment portfolios?",
            choices: [
                "A) By focusing on low-risk, established companies",
                "B) By investing only in publicly traded companies",
                "C) By providing funding to startup and early-stage companies",
                "D) By avoiding innovation and new technologies"
            ],
            correctAnswer: "C) By providing funding to startup and early-stage companies"
        },
        {
            question: "What is the risk-return profile typically associated with alternative investments?",
            choices: [
                "A) Low risk and low return",
                "B) Moderate risk and moderate return",
                "C) High risk and high return",
                "D) Guaranteed returns with no risk"
            ],
            correctAnswer: "C) High risk and high return"
        },
    ];
    
    const etf = [
        {
            question: "What is decentralized finance (DeFi) in the financial industry?",
            choices: [
                "A) A traditional banking system",
                "B) A centralized system governed by a single authority",
                "C) Financial services built on blockchain technology, allowing decentralized and open access",
                "D) Exclusive financial services for a select group of investors"
            ],
            correctAnswer: "C) Financial services built on blockchain technology, allowing decentralized and open access"
        },
        {
            question: "How does artificial intelligence (AI) impact financial institutions?",
            choices: [
                "A) AI has no relevance in the financial industry",
                "B) AI improves efficiency through automation, data analysis, and risk management",
                "C) AI only affects non-banking sectors",
                "D) AI increases human errors in financial operations"
            ],
            correctAnswer: "B) AI improves efficiency through automation, data analysis, and risk management"
        },
        {
            question: "What is the concept of green finance or sustainable finance?",
            choices: [
                "A) Investing exclusively in fossil fuels",
                "B) Ignoring environmental considerations in financial decisions",
                "C) Integrating environmental, social, and governance (ESG) factors into investment decisions",
                "D) Supporting environmentally harmful industries"
            ],
            correctAnswer: "C) Integrating environmental, social, and governance (ESG) factors into investment decisions"
        },
        {
            question: "How does blockchain technology impact financial transactions?",
            choices: [
                "A) Slows down the transaction process",
                "B) Reduces security in financial transactions",
                "C) Increases transparency, security, and efficiency in transactions",
                "D) Only applicable to physical currencies"
            ],
            correctAnswer: "C) Increases transparency, security, and efficiency in transactions"
        },
        {
            question: "What is the role of robo-advisors in the financial industry?",
            choices: [
                "A) Human-only financial advisors",
                "B) Automated platforms that provide investment advice based on algorithms",
                "C) Advisors exclusively for high-net-worth individuals",
                "D) Advisors with no knowledge of financial markets"
            ],
            correctAnswer: "B) Automated platforms that provide investment advice based on algorithms"
        },
        {
            question: "How does the concept of open banking contribute to financial innovation?",
            choices: [
                "A) Restricts access to banking services",
                "B) Allows traditional banks to operate in isolation",
                "C) Facilitates the sharing of financial data and services among different financial institutions",
                "D) Eliminates the need for traditional banking services"
            ],
            correctAnswer: "C) Facilitates the sharing of financial data and services among different financial institutions"
        },
        {
            question: "What are central bank digital currencies (CBDCs) in the context of emerging trends?",
            choices: [
                "A) Physical currencies issued by central banks",
                "B) Digital assets unrelated to central banks",
                "C) Digital forms of national currencies issued by central banks",
                "D) Exclusively used by private banks"
            ],
            correctAnswer: "C) Digital forms of national currencies issued by central banks"
        },
        {
            question: "What is the concept of microfinance and its role in emerging finance trends?",
            choices: [
                "A) Exclusive financial services for large corporations",
                "B) Providing financial services to individuals and small businesses in underserved communities",
                "C) Ignoring the financial needs of low-income individuals",
                "D) Only relevant to high-net-worth individuals"
            ],
            correctAnswer: "B) Providing financial services to individuals and small businesses in underserved communities"
        },
        {
            question: "How does quantum computing impact financial institutions?",
            choices: [
                "A) Slows down financial calculations",
                "B) Has no impact on financial operations",
                "C) Enhances computational power for complex financial calculations and simulations",
                "D) Only applicable to non-financial sectors"
            ],
            correctAnswer: "C) Enhances computational power for complex financial calculations and simulations"
        },
        {
            question: "What role do cryptocurrencies play in the emerging trends of finance?",
            choices: [
                "A) Cryptocurrencies have no relevance in modern finance",
                "B) Cryptocurrencies provide a centralized and regulated financial system",
                "C) Cryptocurrencies offer decentralized and digital alternatives to traditional currencies",
                "D) Cryptocurrencies are exclusively used by government institutions"
            ],
            correctAnswer: "C) Cryptocurrencies offer decentralized and digital alternatives to traditional currencies"
        },
    ];
    
    function generateQuizElements(quizList, form) {
        quizList.forEach((quiz, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
                <p>${index + 1}. ${quiz.question}</p>
                <div class="options">
                    ${quiz.choices.map((choice, choiceIndex) => `
                        <label>
                            <input type="radio" name="q${index + 1}" data-answer="${choice}">
                            ${choice}
                        </label>
                    `).join('')}
                </div>
            `;
            form.appendChild(questionDiv);
        });

        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'Submit';
        form.appendChild(submitButton);
    }

    function showResults() {
        let correctAnswers = 0;
        let selectedQuizData;
    
        if (quizSelector.value === 'ipm') {
            selectedQuizData = ipm;
        } else if (quizSelector.value === 'pfm') {
            selectedQuizData = pfm;
        } else if (quizSelector.value === 'epp') {
            selectedQuizData = epp;
        } else if (quizSelector.value === 'fmi') {
            selectedQuizData = fmi;
        } else if (quizSelector.value === 'get') {
            selectedQuizData = get;
        } else if (quizSelector.value === 'gpf') {
            selectedQuizData = gpf;
        } else if (quizSelector.value === 'fle') {
            selectedQuizData = fle;
        } else if (quizSelector.value === 'cdm') {
            selectedQuizData = cdm;
        } else if (quizSelector.value === 'edf') {
            selectedQuizData = edf;
        } else if (quizSelector.value === 'bedm') {
            selectedQuizData = bedm;
        } else if (quizSelector.value === 'repi') {
            selectedQuizData = repi;
        } else if (quizSelector.value === 'tfp') {
            selectedQuizData = tfp;
        } else if (quizSelector.value === 'frc') {
            selectedQuizData = frc;
        } else if (quizSelector.value === 'tf') {
            selectedQuizData = tf;
        } else if (quizSelector.value === 'sfe') {
            selectedQuizData = sfe;
        } else if (quizSelector.value === 'irm') {
            selectedQuizData = irm;
        } else if (quizSelector.value === 'fhec') {
            selectedQuizData = fhec;
        } else if (quizSelector.value === 'ipms') {
            selectedQuizData = ipms;
        } else if (quizSelector.value === 'ai') {
            selectedQuizData = ai;
        } else if (quizSelector.value === 'etf') {
            selectedQuizData = etf;
        }
    
        selectedQuizData.forEach((quiz, index) => {
            const selectedAnswerElement = form.querySelector('input[name="q' + (index + 1) + '"]:checked');
    
            if (selectedAnswerElement) {
                const selectedAnswer = selectedAnswerElement.dataset.answer;
    
                if (selectedAnswer === quiz.correctAnswer) {
                    correctAnswers++;
                }
            }
        });
    
        const totalQuestions = selectedQuizData.length;
        const percentage = (correctAnswers / totalQuestions) * 100;
        scoreContainer.textContent = `You got ${correctAnswers} out of ${totalQuestions} correct (${percentage.toFixed(2)}%)`;
        resultsContainer.style.display = 'block';
    }
    

    form.style.display = 'none';

    quizSelector.addEventListener('change', function () {
        const selectedQuiz = this.value;

        form.innerHTML = '';
        resultsContainer.style.display = 'none';

        if (selectedQuiz === 'ipm') {
            generateQuizElements(ipm, form);
        } else if (selectedQuiz === 'pfm') {
            generateQuizElements(pfm, form);
        } else if (selectedQuiz === 'epp') {
            generateQuizElements(epp, form);
        } else if (selectedQuiz === 'fmi') {
            generateQuizElements(fmi, form);
        } else if (selectedQuiz === 'get') {
            generateQuizElements(get, form);
        } else if (selectedQuiz === 'gpf') {
            generateQuizElements(gpf, form);
        } else if (selectedQuiz === 'fle') {
            generateQuizElements(fle, form);
        } else if (selectedQuiz === 'cdm') {
            generateQuizElements(cdm, form);
        } else if (selectedQuiz === 'ebf') {
            generateQuizElements(ebf, form);
        } else if (selectedQuiz === 'bedm') {
            generateQuizElements(bedm, form);
        } else if (selectedQuiz === 'repi') {
            generateQuizElements(repi, form);
        } else if (selectedQuiz === 'tfp') {
            generateQuizElements(tfp, form);
        } else if (selectedQuiz === 'frc') {
            generateQuizElements(frc, form);
        } else if (selectedQuiz === 'tf') {
            generateQuizElements(tf, form);
        } else if (selectedQuiz === 'sfe') {
            generateQuizElements(sfe, form);
        } else if (selectedQuiz === 'irm') {
            generateQuizElements(irm, form);
        } else if (selectedQuiz === 'fhec') {
            generateQuizElements(fhec, form);
        } else if (selectedQuiz === 'ipms') {
            generateQuizElements(ipms, form);
        } else if (selectedQuiz === 'ai') {
            generateQuizElements(ai, form);
        } else if (selectedQuiz === 'etf') {
            generateQuizElements(etf, form);
        }

        form.style.display = 'block';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        showResults();
    });
});