import { getAllMovies,getMoviesByCategory,getMoviesByStars } from "../dal/movies.dal";

export function getAllMoviesService(){
    return getAllMovies();
}

export function getMoviesByCategoryService(){
    return getMoviesByCategory(category);
}

export function getMoviesByStarsservice(){
    return getMoviesByStars(stars);
}

//לא סויים עדיין ת בהמשך נעשה שימוש איתם 