import express from "express";
import itemsRoutes from "./items.routes.js";
import quotesRoutes from "./quotes.routes.js";
import { getTriviaQuestions } from "../controllers/quotes.controller.js";

const router = express.Router();

router.use("/movies", itemsRoutes);//עבור סרטים

router.use("/quotes", quotesRoutes);//לסדרות ממקור חיצוני

router.get("/trivia/:type/:difficulty/:number", getTriviaQuestions);//לטרוויה ממקור חיצוני

export default router;