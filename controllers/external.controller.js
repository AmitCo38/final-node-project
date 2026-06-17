import {
    getRandomQuoteService,
    getTriviaQuestionsService
} from "../services/external.service.js";

export async function getRandomQuote(req, res) {
    const source = req.params.source;
    const amount = req.params.amount;

    const result = await getRandomQuoteService(source, amount);

    res.status(result.status).json(result.data);
}

export async function getTriviaQuestions(req, res) {
    const type = req.params.type;
    const difficulty = req.params.difficulty;
    const number = req.params.number;

    const result = await getTriviaQuestionsService(type, difficulty, number);

    res.status(result.status).json(result.data);
}