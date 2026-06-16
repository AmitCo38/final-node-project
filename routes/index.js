import express from "express";
import itemsRoutes from "./items.routes.js";
import quotesRoutes from "./quotes.routes.js";
import { getTriviaQuestions } from "../controllers/quotes.controller.js";

const router = express.Router();

router.use("/movies", itemsRoutes);
router.use("/quotes", quotesRoutes);

router.get("/trivia/:type/:difficulty/:number", getTriviaQuestions);

export default router;