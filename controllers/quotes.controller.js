import { getRandomQuoteService } from "../services/quotes.service.js";

export async function getRandomQuote(req, res) {
    try {
        const quote = await getRandomQuoteService();

        res.json({
            message: "Random quote fetched successfully",
            data: quote
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to get random quote",
            error: error.message
        });
    }
}