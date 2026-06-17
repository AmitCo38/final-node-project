import { getAllMovies, getMoviesByCategory, getMoviesByStars } from "../dal/movies.dal.js";

//////1
export function getAllMoviesService(){

    return getAllMovies();
    
}

///////2
export function getMoviesByCategoryService(category){

    const movie=getMoviesByCategory(category);

    if(movie.length===0){
        throw new Error("We dont have this Category");
    }
    return movie;

}

///////3
export function getMoviesByStarsService(stars){
 
    if(stars<=0 || stars>5){
        throw new Error("Just between 1-5");
    }
    return getMoviesByStars(stars);
}

