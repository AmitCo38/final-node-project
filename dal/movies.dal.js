const movies = [
  {
    id: 1,
    name: "The Final Level",
    year: 2024,
    category: "Action",
    stars: 4,
    comments:[
      {
          name:"22Omer77",
          comment:"very good movie"
      },
        {
          name:"Lori09",
          comment:"Nice movie"
      }
    ]
  },
  {
    id: 2,
    name: "Time Travel",
    year: 2013,
    category: "Fantasy",
    stars: 5,
     comments:[
      {
          name:"Corali1",
          comment:"If you want to watch something , i recommend this movie"
      },
        {
          name:"Linaa21",
          comment:"I didnt get the end of this movies..."
      }
    ]
  },
  {
    id: 3,
    name: "Smile",
    year: 2022,
    category: "Horror",
    stars: 4,
     comments:[
      {
          name:"YanaLL12",
          comment:"The best movies i ever watch!!!"
      },
        {
          name:"Carolinka",
          comment:"good movie"
      }
    ]
  },
  {
    id: 4,
    name: "Virtual World",
    year: 2024,
    category: "Fantasy",
    stars: 3,
     comments:[
      {
          name:"LOkaraA12",
          comment:"it wasnt good movies"
      },
        {
          name:"LoriaA1",
          comment:"its nice ...i will not gonna watch it again..."
      },
      {
        name:"okAk",
        comment:"Who write this movie?? realli bad.."
      }
    ]
  },
  {
    id: 5,
    name: "Mia's Family",
    year: 2024,
    category: "Family",
    stars: 4,
     comments:[
      {
          name:"Omeriki",
          comment:"very good movie"
      },
        {
          name:"Loriki",
          comment:"Nice movie"
      }
    ]
  },
  {
    id: 6,
    name: "Last Mission",
    year: 2019,
    category: "Action",
    stars: 5,
     comments:[
      {
          name:"Carol",
          comment:"Second time i watch this movie!!!"
      },
        {
          name:"Lori",
          comment:"Great movie!!"
      }
    ]
  },
  {
    id: 7,
    name: "Dark House",
    year: 2021,
    category: "Horror",
    stars: 3,
     comments:[
      {
          name:"Qachaka88",
          comment:"NO and no again!! i didnt even get what they doing"
      },
        {
          name:"KIkik",
          comment:"I think they could do a better film..."
      }
    ]
  },
  {
    id: 8,
    name: "The Lost Kingdom",
    year: 2018,
    category: "Adventure",
    stars: 4,
    comments:[]
  },
  {
    id: 9,
    name: "Funny Days",
    year: 2020,
    category: "Comedy",
    stars: 4,
    comments:[]
  },
  {
    id: 10,
    name: "Love in Paris",
    year: 2017,
    category: "Romance",
    stars: 3,
    comments:[]
  },
  {
    id: 11,
    name: "Space War",
    year: 2023,
    category: "Sci-Fi",
    stars: 5,
     comments:[
      {
          name:"Japanka",
          comment:"I reallyb think it was good film"
      }
    ]
  },
  {
    id: 12,
    name: "Robot City",
    year: 2022,
    category: "Sci-Fi",
    stars: 4,
    comments:[]
  },
  {
    id: 13,
    name: "The Hidden Truth",
    year: 2016,
    category: "Mystery",
    stars: 4,
    comments:[]
  },
  {
    id: 14,
    name: "Broken Badge",
    year: 2015,
    category: "Crime",
    stars: 5,
    comments:[]
  },
  {
    id: 15,
    name: "School Trouble",
    year: 2021,
    category: "Comedy",
    stars: 3,
     comments:[
      {
          name:"Amiti",
          comment:"i didnt get the point about thi film",
      },
        {
          name:"134qqqy",
          comment:"I only who think it was good film?"
      }
    ]
  },
  {
    id: 16,
    name: "Dragon Heart",
    year: 2014,
    category: "Fantasy",
    stars: 5,
    comments:[]
  },
  {
    id: 17,
    name: "The Big Game",
    year: 2020,
    category: "Sports",
    stars: 4,
    comments:[]
  },
  {
    id: 18,
    name: "Family Vacation",
    year: 2019,
    category: "Family",
    stars: 3,
     comments:[
      {
          name:"ROnkale09",
          comment:"it was really good film how they get only 3 stars???!"
      },
        {
          name:"34aRnLOnd5",
          comment:"Nice movie"
      }
    ]
  },
  {
    id: 19,
    name: "Island Escape",
    year: 2023,
    category: "Adventure",
    stars: 4,
    comments:[]
  },
  {
    id: 20,
    name: "The Silent Case",
    year: 2024,
    category: "Mystery",
    stars: 5,
    comments:[]
  }
];

export function getAllMovies() {
  return movies;
}

export function getMoviesByCategory(category) {
  return movies.filter(movie => movie.category.toLowerCase() === category.toLowerCase());
}

export function getMoviesByStars(stars) {
  return movies.filter(movie => movie.stars === Number(stars));
}

export function addComment(id,comment){
  const movie=movies.find(movie=>movie.id==id);
    if(!movie){
      return null;
    }
    movie.comments.push(comment);
    return movie;
}
