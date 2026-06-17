import express from "express";
import itemsRoutes from "./items.routes.js";
import externalRoutes from "./external.routes.js";

const router = express.Router();

router.use("/movies", itemsRoutes); // עבור סרטים

router.use("/", externalRoutes); // עבור routes שמגיעים ממקור חיצוני: quotes + trivia

export default router;