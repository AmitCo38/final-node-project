import express from "express";
import {
    getRandomQuote,
    getTriviaQuestions
} from "../controllers/quotes.controller.js";

const router = express.Router();

// quotes routes
router.get("/random/:source", getRandomQuote);
router.get("/random/:source/:amount", getRandomQuote);

// trivia routes
router.get("/trivia/:type/:difficulty/:number", getTriviaQuestions);

export default router;