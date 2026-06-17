import express from "express";
import {
    getRandomQuote,
    getTriviaQuestions
} from "../controllers/external.controller.js";

const router = express.Router();

// quotes routes
router.get("/quotes/random/:source", getRandomQuote);
router.get("/quotes/random/:source/:amount", getRandomQuote);

// trivia routes
router.get("/trivia/:type/:difficulty/:number", getTriviaQuestions);

export default router;