document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('results');
    const scoreContainer = document.getElementById('score');
    const quizSelector = document.getElementById('quiz-selector');

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
        const selectedQuizData = quizSelector.value === 'iapm' ? iapm : pfm;

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

        if (selectedQuiz === 'iapm') {
            generateQuizElements(iapm, form);
        } else if (selectedQuiz === 'pfm') {
            generateQuizElements(pfm, form);
        }

        form.style.display = 'block';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        showResults();
    });
});

const iapm = [
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