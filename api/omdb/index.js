import axios from 'axios';
import { OMDB_API_KEY, OMDB_URL } from '@env';

const SearchResponse = {
  Search: [
    {
      Title: 'Batman v Superman: Dawn of Justice',
      Year: '2016',
      imdbID: 'tt2975590',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
    },
    {
      Title: 'Justice League',
      Year: '2017',
      imdbID: 'tt0974015',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
    },
    {
      Title: 'Seeking Justice',
      Year: '2011',
      imdbID: 'tt1214962',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzAxMzAyODEyMV5BMl5BanBnXkFtZTcwNjU3OTEzNw@@._V1_SX300.jpg'
    },
    {
      Title: 'Justice League: The Flashpoint Paradox',
      Year: '2013',
      imdbID: 'tt2820466',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTgwNTljYzgtOTU3ZC00ZjhhLTk0YzItY2RiMWU0MGZlNzFjL2ltYWdlXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg'
    },
    {
      Title: 'Justice League',
      Year: '2001–2004',
      imdbID: 'tt0275137',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDE2ODk0ZTctMGI4Ni00ODgwLTk4OTAtOGNiNjZkMzI3NTY0XkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg'
    },
    {
      Title: 'Young Justice',
      Year: '2010–',
      imdbID: 'tt1641384',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZTNkOWIwODItYjcxOS00MDQ5LTk1ZGMtNDNhNzFhNTM4OGJiXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SX300.jpg'
    },
    {
      Title: 'And Justice for All',
      Year: '1979',
      imdbID: 'tt0078718',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDk1MTljZjAtZDY5MC00YTAwLTk5MzEtZTMyMjI4YzRmZjcxXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
    },
    {
      Title: 'Justice League: Doom',
      Year: '2012',
      imdbID: 'tt2027128',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTFlMzdkMDgtNzJmZC00ZmE3LThkYzktNGZmNmMzZmNhYmY5XkEyXkFqcGdeQXVyNDYwMjI1MzI@._V1_SX300.jpg'
    },
    {
      Title: 'Justice League: War',
      Year: '2014',
      imdbID: 'tt3060952',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYzA4ZjA3NzUtNDhjNS00OGNlLWI4ZWUtYzhkMmJiZDU2ZWExXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
    },
    {
      Title: 'Justice League: Crisis on Two Earths',
      Year: '2010',
      imdbID: 'tt1494772',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMzg0ODZjNjUtNmVhZi00NTYxLWExNWMtMWI3MDFiMjhiNjc2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
    }
  ],
  totalResults: '1248',
  Response: 'True'
};

const apikey = OMDB_API_KEY;
const baseURL = OMDB_URL;

const toQuery = params =>
  Object.entries(params)
    .reduce((entries, [key, val]) => [...entries, `${key}=${val}`], [])
    .join('&');

const omdb = params =>
  axios
    .get(`${baseURL}?apikey=${apikey}&${toQuery(params)}`)
    .then(response => response.data);

const fetchMovies = query => omdb({ s: query });
const fetchMovie = id => omdb({ i: id });

export { fetchMovie, fetchMovies, SearchResponse };
