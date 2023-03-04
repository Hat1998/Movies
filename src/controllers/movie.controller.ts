import { Genre } from "@prisma/client";
import { prisma } from "../config/db";
import { Request, Response } from "express";
  export const getAllMovies = async (req: Request, res: Response) => {
  try {
    let movies = await prisma.movie.findMany();

    res.json({ movies: movies });
  } catch (err) {
    console.log(err);
  }
};

export const createMovie = async (req: Request, res: Response) => {

   try {
    await prisma.movie.create({
      data: {
        name: req.body.name,
        genre: req.body.genre,
        rating: req.body.rating,
        duration: req.body.duration,
      },
    });
    res.json({ message: "Movie created" });
  } catch (error) {
    res.json(error);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    await prisma.movie.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        genre: req.body.genre,
        rating: req.body.rating,
        duration: req.body.duration,
      },
    });
    res.json({ message: "Movie updated" });
  } catch (error) {
    res.json({ message: error });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    await prisma.movie.delete({
      where: { id: req.params.id },
    });
    res.json({ message: "Movie deleted" });
  } catch (error) {
    res.json({ message: error });
  }
};

export const getMovieByname = async (req: Request, res: Response) => {
  try {
    let movie = await prisma.movie.findMany({
      where: {
        name: req.params.name,
      },
    });
    res.json({ Movie: movie });
  } catch (error) {
    res.json({ message: error });
  }
};

export const getMovieWithGenre = async (req: Request, res: Response) => {
  let g = req.params.genre as Genre;
  
  try {
    let movieGenre = await prisma.movie.findMany({
      where: {
        genre: g
      },
    });

    res.json({ message: movieGenre });
  } catch (error) {
    res.json({ message: error });
  }
};

export const getMovieWithRating = async (req: Request, res: Response) => {
  let { rating } = req.params;
  let Rating = parseInt(rating);
  try {
    let MovieRating = await prisma.movie.findMany({
      where: {
        rating: Rating,
      },
    });
    res.json({ message: MovieRating });
  } catch (error) {
    res.json({ message: error });
  }
};
