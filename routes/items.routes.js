import express from "express";
import { getAllMovies, getMoviesByCategory, getMoviesByStars ,addComment} from "../controllers/item.controller.js";

const router = express.Router();

router.get("/", getAllMovies);

router.get("/category/:category", getMoviesByCategory);

router.get("/stars/:stars", getMoviesByStars);

router.post("/:id",addComment);

export default router;