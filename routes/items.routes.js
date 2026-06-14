import express from "express";
import { getAllMovies, getMoviesByCategory, getMoviesByStars } from "../controllers/item.controller.js";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/category/:category", getMoviesByCategory);
router.get("/stars/:stars", getMoviesByStars);

export default router;