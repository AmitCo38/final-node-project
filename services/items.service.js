import { getAllMovies,getMoviesByCategory } from "../dal/movies.dal";

export function getAllMoviesService(){
    return getAllMovies();
}

export function getMoviesByCategoryService(category){
    return getMoviesByCategory(category);
}//לא סויים עדיין ת בהמשך נעשה שימוש איתם 