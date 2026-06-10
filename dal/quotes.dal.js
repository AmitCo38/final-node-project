const movies = [
  {
    id: 1,
    name: "The Final Level",
    year: 2024,
    category: "Action",
    stars: 4
  },
  {
    id: 2,
    name: "Time Travel",
    year: 2013,
    category: "Fantasy",
    stars: 5
  },
  {
    id: 3,
    name: "Smile",
    year: 2022,
    category: "Horror",
    stars: 4
  },
  {
    id: 4,
    name: "Virtual World",
    year: 2024,
    category: "Fantasy",
    stars: 3
  },
  {
    id: 5,
    name: "Mia's Family",
    year: 2024,
    category: "Family",
    stars: 4
  },
  {
    id: 6,
    name: "Last Mission",
    year: 2019,
    category: "Action",
    stars: 5
  },
  {
    id: 7,
    name: "Dark House",
    year: 2021,
    category: "Horror",
    stars: 3
  },
  {
    id: 8,
    name: "The Lost Kingdom",
    year: 2018,
    category: "Adventure",
    stars: 4
  },
  {
    id: 9,
    name: "Funny Days",
    year: 2020,
    category: "Comedy",
    stars: 4
  },
  {
    id: 10,
    name: "Love in Paris",
    year: 2017,
    category: "Romance",
    stars: 3
  },
  {
    id: 11,
    name: "Space War",
    year: 2023,
    category: "Sci-Fi",
    stars: 5
  },
  {
    id: 12,
    name: "Robot City",
    year: 2022,
    category: "Sci-Fi",
    stars: 4
  },
  {
    id: 13,
    name: "The Hidden Truth",
    year: 2016,
    category: "Mystery",
    stars: 4
  },
  {
    id: 14,
    name: "Broken Badge",
    year: 2015,
    category: "Crime",
    stars: 5
  },
  {
    id: 15,
    name: "School Trouble",
    year: 2021,
    category: "Comedy",
    stars: 3
  },
  {
    id: 16,
    name: "Dragon Heart",
    year: 2014,
    category: "Fantasy",
    stars: 5
  },
  {
    id: 17,
    name: "The Big Game",
    year: 2020,
    category: "Sports",
    stars: 4
  },
  {
    id: 18,
    name: "Family Vacation",
    year: 2019,
    category: "Family",
    stars: 3
  },
  {
    id: 19,
    name: "Island Escape",
    year: 2023,
    category: "Adventure",
    stars: 4
  },
  {
    id: 20,
    name: "The Silent Case",
    year: 2024,
    category: "Mystery",
    stars: 5
  }
];

export function getAllMovies() {
  return movies;
}

export function getMoviesByCategory(category) {
  return movies.filter(movie => movie.category.toLowerCase() === category.toLowerCase());
}