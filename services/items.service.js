import { getAllMovies, getMoviesByCategory, getMoviesByStars } from "../dal/movies.dal.js";

//////1
export function getAllMoviesService(){
    try{
    return getAllMovies();
    }

    catch(error){
        throw new Error(error.message);
    }
    
}

///////2
export function getMoviesByCategoryService(category){
    try{
    const movie=getMoviesByCategory(category);

    if(movie.length===0){
        throw new Error("We dont have this Category");
    }
    return movie;
    
}
       catch(error){
        throw new Error(error.message);
    }
}

///////3
export function getMoviesByStarsService(stars){
    try{
    if(stars<=0 || stars>5){
        throw new Error("Just between 1-5");
    }
    return getMoviesByStars(stars);
    }
 catch(error){
        throw new Error(error.message);
    }
}

