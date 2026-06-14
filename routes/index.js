import express from "express";
import moviesRoutes from "./movies.routes.js";
import quotesRoutes from "./quotes.routes.js";

const router = express.Router();

router.use("/movies", moviesRoutes);
router.use("/quotes", quotesRoutes);

export default router;
