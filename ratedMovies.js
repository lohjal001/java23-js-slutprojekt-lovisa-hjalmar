import { displayErrorConnect, displayMovies } from "./display.js";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjc1MmM0NmM4MjhiMWI4OGExNTZiNzgwYzdmNmYzZiIsInN1YiI6IjY2MWY5YTY3ZDc1YmQ2MDE3YzMyYzJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aiJx1zo-fRPQlh38lFxqx_onL0EclilTbBXcnWQIoDM'
  }
};

export async function getTopRatedMovies() {
  const listUrl ='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

  fetch(listUrl, options)

    .then(res => { 
      if (!res.ok) {
      throw new Error('error messg'); 
    }
    return res.json();
  })
    .then(data => {     
      console.log(data.results)
      displayMovies(data.results) 
  }).catch( error =>{ console.log(error)
    displayErrorConnect(error.message);
  })
};