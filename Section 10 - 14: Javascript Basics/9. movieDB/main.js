// SECTION 14 LECTURE 169
// MOVIEDB

let movies = [
  {
    title: "Bee Movie",
    rating: 5.0,
    hasWatched: true
  },
  {
    title: "Despicable Me 2",
    rating: 2.4,
    hasWatched: false
  },
  {
    title: "Cars 3",
    rating: 3.0,
    hasWatched: false
  },
  {
    title: "Splatoon: The Woomy",
    rating: 5.0,
    hasWatched: true
  }
];

function movieSummary(arr) {
  arr.forEach(function(movie) {
    buildResult(movie);
  });
}

function buildResult(movie) {
  let result = "You have";
  if (movie.hasWatched) {
    result += " watched ";
  } else {
    result += " not watched ";
  }
  result += '"' + movie.title + '"';
  result += " - " + movie.rating + " stars.";
  console.log(result);
  return result;
}

movieSummary(movies);
