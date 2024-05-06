import { displaySearchedMovies } from "./display.js";
import { displayPersons } from "./display.js";
import { displayErrorMessage } from "./display.js";


//contains key for api
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjc1MmM0NmM4MjhiMWI4OGExNTZiNzgwYzdmNmYzZiIsInN1YiI6IjY2MWY5YTY3ZDc1YmQ2MDE3YzMyYzJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aiJx1zo-fRPQlh38lFxqx_onL0EclilTbBXcnWQIoDM'
  }
};


//fetch functions for movies and person from search 
export async function getMovieSearchResult(searchInput) {
  const listUrl = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`;

  fetch(listUrl, options)

    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      console.log(searchInput)

      if (data.results.length == 0) {
        displayErrorMessage();
      } else if (data.results.length !==0){
        displaySearchedMovies(data.results)
      }

    })

};

export async function getPersonSearchResult(searchInput) {
  const listUrl = `https://api.themoviedb.org/3/search/person?query=${searchInput}&include_adult=false&language=en-US&page=1`;

  fetch(listUrl, options)

    .then(res => res.json())
    .then(data => {
      console.log(data.results)

      if (data.results.length == 0) {
        displayErrorMessage();
      } else if (data.results.length !==0){
        displayPersons(data.results)
      }

    })
};