import express from "express";
import itemsRoutes from "./items.routes.js";
import quotesRoutes from "./quotes.routes.js";

const router = express.Router();

router.use("/movies", itemsRoutes);
router.use("/quotes", quotesRoutes);

export default router;