import { getAllMoviesService , getMoviesByCategoryService, getMoviesByStarsService} from "../services/items.service.js";

export function getAllMovies(req,res){
  try{
    const movies=getAllMoviesService();

    res.json(movies);
  }
  catch(error){res.status(400).json({message:error.message});

  }
}
/////
export function getMoviesByCategory(req,res){
     try{
    const category=req.params.category;
    const movie=getMoviesByCategoryService(category);

    res.json(movie);

     }

     catch(error){
        res.status(400).json({message:error.message});
     }
}
/////
export function getMoviesByStars(req,res){
     try{
    const stars=req.params.stars;
    const moviestars=getMoviesByStarsService(stars);
    res.json(moviestars);
      }

     catch(error){
        res.status(400).json({message:error.message});
    }
}
