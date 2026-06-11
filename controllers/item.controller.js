import { getAllMoviesService , getMoviesByCategoryService, getMoviesByStarsservice} from "../services/items.service.js";

export function getAllMovies(req,res){
    const movies=getAllMoviesService();

    res.json(movies);
}

export function getMoviesByCategory(req,res){
    const category=req.params.category;
    const movie=getMoviesByCategoryService(category);
    
    res.json(movie);
}

export function getMoviesByStars(req,res){
    const stars=req.params.stars;
    const moviestars=getMoviesByStarsservice(stars);
    
    res.json(moviestars);
}

//נרשם פה בקשות מסוימות מהמשתמש ומה הן מחזירות , בדיוק 
//הראשון מחזיר סרטים עפי הכתובת שהמשתמש ירשום במקרה שלו זה סרטים באנגלית
//השני זה על פי הקטגוריה שהמשתמש מבקש ויחזיר רשימת סרטים לכן שניי משתנים, 1 קלט מהמבקש
//משתנה שני הוא הכנסת בקשת קטגוריה של המשתמש וחיפוש לפי זה במערך סרטים
//  מה שמחזירים למשתמש, הסרטים הספציפיים עפי הקלט כלומר סוג קטגוריה שהמשתמש ביקש