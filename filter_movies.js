const movies = [
  { title: 'Black Panther', year: 2018, genre: 'action', rating: 7.4 },
  { title: 'Avengers Infinity War', year: 2018, genre: 'action', rating: 8.5 },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'Fantasy/Science Fiction',
    rating: 8.7
  },

//

  {
    title: 'Incredibles 2',
    year: 2018,
    genre: 'Science Fiction/Action',
    rating: 7.8
  },
  { title: 'Deadpool 2', year: 2018, genre: 'action', rating: 7.8 },
  { title: 'Ant-Man and the Wasp', year: 2018, genre: 'action', rating: 7.2 },
  {
    title: 'Venom',
    year: 2018,
    genre: 'Thriller/Science Fiction',
    rating: 6.8
  },
  {
    title: 'Ralph Breaks the Internet',
    year: 2018,
    genre: 'Comedy',
    rating: 7.3
  }
];

const filter = function(movieArr, callback) {
  const filteredFilms = [];
  for (let movieObj of movieArr) {
    if (callback(movieObj)) {
    filteredFilms.push(movieObj)
    }
  }
  return filteredFilms;
}

const ratings = item => item.rating >= 8;
const genre = item => item.genre === 'Comedy';


console.log(filter(movies, ratings));


// Use the filter function to get the movies with highest ratings (rating >= 8)

// Use the filter function to get the movies where the genre is 'comedy'

