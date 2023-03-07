import { movies } from "/JS/movies.JS";

const mostPopularMovies = document.querySelector('.div-mostpopular-movies');

movies.forEach(movie => {
  const movieDiv = document.createElement('div');
  movieDiv.classList.add('div-movie');

  const movieLink = document.createElement('a');
  movieLink.href = 'productpage.html';

  const movieImg = document.createElement('img');
  movieImg.src = movie.imageSrc;
  movieImg.alt = `Movie poster - ${movie.title}`;
  movieImg.classList.add('movie');

  const movieTitleDiv = document.createElement('div');
  movieTitleDiv.classList.add('div-movie-title');

  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie-title');
  movieTitle.textContent = movie.title;

  movieLink.appendChild(movieImg);
  movieTitleDiv.appendChild(movieTitle);

  movieDiv.appendChild(movieLink);
  movieDiv.appendChild(movieTitleDiv);

  mostPopularMovies.appendChild(movieDiv);
});

