import { getAllMoviesService , getMoviesByCategoryService, getMoviesByStarsService,addCommentService} from "../services/items.service.js";

export function getAllMovies(req,res){
  try{
    const movies=getAllMoviesService();

    res.status(200).json(movies);
  }

  catch(error){
    res.status(400).json({message:error.message});
  }
}
/////
export function getMoviesByCategory(req,res){
     try{
    const category=req.params.category;
    const movie=getMoviesByCategoryService(category);

    res.status(200).json(movie);
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

    res.status(200).json(moviestars);
    }

     catch(error){
        res.status(400).json({message:error.message});
    }
}
////////
export function addComment(req,res){
  try{
    const id=req.params.id;
    const comment=req.body;

    const movie=addCommentService(id,comment);
    res.status(201).json(movie);
  }
  catch(error){
    res.status(400).json({message:error.message});
  }
}
