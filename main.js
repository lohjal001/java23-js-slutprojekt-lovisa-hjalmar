import { getTopPopularMovies } from './topMovies.js';
import { getTopRatedMovies } from './ratedMovies.js';
import { getMovieSearchResult } from './searchMovies.js';
import { getPersonSearchResult } from './searchMovies.js';

//eventlisteners that lead to the fetch functions that use the display functions 
document.getElementById('popMovies').addEventListener('click', getTopPopularMovies);

document.getElementById('rateMovies').addEventListener('click', getTopRatedMovies);

document.getElementById('searchBtn').addEventListener('click', searchEvent);




//function for the search form, leads to fetch functions that use the display functions 
function searchEvent(event){
    event.preventDefault();
    const searchInput = document.getElementById('searchField').value;
    console.log(searchInput);
    const searchType = document.getElementById('searchOptions').value;
    console.log(searchType); 
    
    //searchForm.reset();

    if (searchType == 'optionM')
        getMovieSearchResult(searchInput);
    
    else 
        getPersonSearchResult(searchInput);
    

}
