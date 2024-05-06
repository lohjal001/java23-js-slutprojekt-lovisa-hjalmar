
const imgUrl = 'https://image.tmdb.org/t/p/w500';
const movieContainer = document.querySelector('#movieList')
const personContainer = document.querySelector('#personsList')
const errorContainer = document.querySelector('#error');

//displays a movie list by creating each element from the fetched Json array
export async function displayMovies(data) {
    console.log(data);
    personContainer.innerHTML = ('');
    movieContainer.innerHTML = ('');

    data.slice(0, 10).forEach((movie, index) => {
        const { title, poster_path, overview, release_date } = movie;
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        const ranking = document.createElement('h2');
        const movieTitle = document.createElement('h4');
        const releaseDate = document.createElement('h4')

        ranking.innerText = (index + 1);
        movieTitle.innerText = title;
        releaseDate.innerText = "Released " + release_date;

        const movieImage = document.createElement('img');
        movieImage.src = `${imgUrl + poster_path}`;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('movie-description');
        descriptionDiv.innerHTML = `${overview}`


        movieDiv.append(ranking, movieTitle, releaseDate, movieImage, descriptionDiv);
        movieContainer.append(movieDiv);

    });
}

//displays search result for persons by creating each element from the Json array
export async function displayPersons(data) {
    personContainer.innerHTML = ('');
    movieContainer.innerHTML = ('');

    data.forEach((person) => {
        console.log(person);
        const { profile_path, name, known_for_department, known_for } = person;
        const personDiv = document.createElement('div');
        personDiv.classList.add('person');

        const personName = document.createElement('h2');
        const department = document.createElement('h4');

        const careerDiv = document.createElement('div');
        careerDiv.classList.add('career');


        personName.innerText = name;
        department.innerText = known_for_department;

        //displays the persons most well known work
        for (const career of known_for) {
            const { media_type, original_title, original_name } = career;
            const mediaType = document.createElement('p');
            const tvSeriesName = document.createElement('h4');
            const movieTitle = document.createElement('h4');

            mediaType.innerText = media_type + ":";
            movieTitle.innerText = original_title;
            tvSeriesName.innerText = original_name;

            console.log(media_type);
            if (mediaType.innerText == "movie:") {
                careerDiv.append(mediaType, movieTitle);
            } else {
                careerDiv.append(mediaType, tvSeriesName);
            }
        }

        const personImage = document.createElement('img');
        personImage.src = `${imgUrl + profile_path}`;

        personDiv.append(personImage, personName, department, careerDiv);

        personContainer.append(personDiv);
    });

}

//display function for movies when you search, without .slice 
export async function displaySearchedMovies(data) {
    console.log(data);
    movieContainer.innerHTML = ('');
    personContainer.innerHTML = ('');

    data.forEach((movie) => {
        const { title, poster_path, overview, release_date } = movie;
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        const ranking = document.createElement('h2');
        const movieTitle = document.createElement('h4');
        const releaseDate = document.createElement('h4')
        movieTitle.innerText = title;
        releaseDate.innerText = "Released " + release_date;

        const movieImage = document.createElement('img');
        movieImage.src = `${imgUrl + poster_path}`;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('movie-description');
        descriptionDiv.innerHTML = `${overview}`


        movieDiv.append(movieTitle, releaseDate, movieImage, descriptionDiv);
        movieContainer.append(movieDiv);


    });
}

export function displayErrorMessage(searchInput){
    console.log(searchInput + 'im here 22222')
    const errorMessage = document.createElement('h2');

    errorMessage.innerHTML = 'Search cannot be found. Check your spelling and please try again.'

    errorContainer.append(errorMessage);
}

// export function displayErrorConnect(){
//     const errorMessage = document.createElement('h2');


//     errorMessage.innerText = "Error 404. We're having trouble with our connection. Please try agin later."


//     errorContainer.append(errorMessage);
// }


