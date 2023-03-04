import { Router } from "express";
import {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieByname,
  getMovieWithRating,
  getMovieWithGenre,
} from "../controllers/movie.controller";
let router = Router();
import validate from "../middleware/validate";
import { createAMovie } from "../zos.schema/zod.movie";

//getAllMovies
router.get("/", getAllMovies);

//createMovie
router.post("/", validate(createAMovie), createMovie);

//updateMovie

router.put("/update/:id", updateMovie);

//deleteMovie
router.delete("/delete/:id", deleteMovie);

//getMovieByname
router.get("/name/:name", getMovieByname);

router.get("/genre/:genre", getMovieWithGenre);

//getMovieWithRating

router.get("/rating/:rating", getMovieWithRating);

export default router;
