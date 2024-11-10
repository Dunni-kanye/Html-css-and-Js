const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_URL = `${BASE_URL}popular?${API_KEY}` ;
const MOVIE_URL = "https://image.tmdb.org/t/p/w500";

const movieMainContainer = document.querySelector(".movieMainContainer");
console.log(movieMainContainer)

console.log(API_URL)

// const getMovies = (url)=>{
//     fetch(url)
//     .then((response)=> response.json())
//     .then((data)=> {
//         console.log(data)
//     })
//     .catch((error)=> console.log(error))
// }

const getMovies = async (url) =>{
    try {
        const response = await fetch(url)
        const data = await response.json();
        console.log(data.results)

         } catch (error) {
            console.log(error)

    }
}

getMovies(API_URL)

function showMovie(movies) {
movies.forEach(movie => {
    const{overview, title, vote_average, poster_path} = movie
    const movieElement = document.createAttribute("div") 

});

}