const quoteApis = {
    southpark: {
        name: "South Park",
        url: "https://southparkquotes.onrender.com/v1/quotes"
    },
    strangerthings: {
        name: "Stranger Things",
        url: "https://strangerthings-quotes.vercel.app/api/quotes"
    },
    lucifer: {
        name: "Lucifer",
        url: "https://lucifer-quotes.vercel.app/api/quotes"
    }
};

export async function getRandomQuoteService(source, amount) {
    try {
        if (!source) {
            return {
                status: 400,
                data: [
                    {
                        quote: "Quote source is required",
                        name: "Error"
                    }
                ]
            };
        }

        const selectedApi = quoteApis[source.toLowerCase()];

        if (!selectedApi) {
            return {
                status: 400,
                data: [
                    {
                        quote: "Invalid quote source. Use: southpark, strangerthings, or lucifer",
                        name: "Error"
                    }
                ]
            };
        }

        let finalUrl = selectedApi.url;

        if (amount !== undefined) {
            const amountNumber = Number(amount);

            if (isNaN(amountNumber)) {
                return {
                    status: 400,
                    data: [
                        {
                            quote: "Amount must be a number",
                            name: "Error"
                        }
                    ]
                };
            }

            if (amountNumber <= 0) {
                return {
                    status: 400,
                    data: [
                        {
                            quote: "Amount must be bigger than 0",
                            name: "Error"
                        }
                    ]
                };
            }

            finalUrl = `${selectedApi.url}/${amountNumber}`;
        }

        const response = await fetch(finalUrl);

        if (!response.ok) {
            return {
                status: 500,
                data: [
                    {
                        quote: `${selectedApi.name} API did not respond correctly`,
                        name: "Error"
                    }
                ]
            };
        }

        const data = await response.json();

        const quotesArray = Array.isArray(data) ? data : [data];

        const quotes = quotesArray.map(item => {
            return {
                quote: item.quote || "No quote found",
                name: item.character || item.author || item.name || "Unknown"
            };
        });

        return {
            status: 200,
            data: quotes
        };
    } catch (error) {
        return {
            status: 500,
            data: [
                {
                    quote: "Failed to get quotes",
                    name: "Error"
                }
            ]
        };
    }
}

export async function getTriviaQuestionsService(type, difficulty, number) {
    try {
        if (!type || !difficulty || !number) {
            return {
                status: 400,
                data: [
                    {
                        question: "Type, difficulty, and number are required",
                        choices: []
                    }
                ]
            };
        }

        let apiType = "";

        if (type.toLowerCase() === "boolean") {
            apiType = "boolean";
        } else if (type.toLowerCase() === "multiple") {
            apiType = "multiple";
        } else {
            return {
                status: 400,
                data: [
                    {
                        question: "Invalid type. Use boolean or multiple",
                        choices: []
                    }
                ]
            };
        }

        const difficultyLower = difficulty.toLowerCase();

        if (
            difficultyLower !== "easy" &&
            difficultyLower !== "medium" &&
            difficultyLower !== "hard"
        ) {
            return {
                status: 400,
                data: [
                    {
                        question: "Invalid difficulty. Use easy, medium, or hard",
                        choices: []
                    }
                ]
            };
        }

        const amountNumber = Number(number);

        if (isNaN(amountNumber)) {
            return {
                status: 400,
                data: [
                    {
                        question: "Number of questions must be a number",
                        choices: []
                    }
                ]
            };
        }

        if (amountNumber <= 0) {
            return {
                status: 400,
                data: [
                    {
                        question: "Number of questions must be bigger than 0",
                        choices: []
                    }
                ]
            };
        }

        if (amountNumber > 9) {
            return {
                status: 400,
                data: [
                    {
                        question: "Maximum number of questions is 9",
                        choices: []
                    }
                ]
            };
        }

        const url = `https://opentdb.com/api.php?amount=${amountNumber}&category=11&difficulty=${difficultyLower}&type=${apiType}&encode=url3986`;

        const response = await fetch(url);

        if (!response.ok) {
            return {
                status: 500,
                data: [
                    {
                        question: "Trivia API did not respond correctly",
                        choices: []
                    }
                ]
            };
        }

        const data = await response.json();

        if (data.response_code !== 0) {
            return {
                status: 400,
                data: [
                    {
                        question: "No questions found for this request",
                        choices: []
                    }
                ]
            };
        }

        const questions = data.results.map(item => {
            const questionText = decodeURIComponent(item.question);
            const correctAnswer = decodeURIComponent(item.correct_answer);

            const incorrectAnswers = item.incorrect_answers.map(answer => {
                return decodeURIComponent(answer);
            });

            let choices = [];

            if (apiType === "boolean") {
                choices = ["True", "False"];
            } else {
                choices = [correctAnswer, ...incorrectAnswers];

                for (let i = choices.length - 1; i > 0; i--) {
                    const randomIndex = Math.floor(Math.random() * (i + 1));
                    const temp = choices[i];
                    choices[i] = choices[randomIndex];
                    choices[randomIndex] = temp;
                }
            }

            return {
                question: questionText,
                choices: choices
            };
        });

        return {
            status: 200,
            data: questions
        };
    } catch (error) {
        return {
            status: 500,
            data: [
                {
                    question: "Failed to get trivia questions",
                    choices: []
                }
            ]
        };
    }
}