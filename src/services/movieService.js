const key = import.meta.env.VITE_TMDB_KEY
const baseurl  = "https://api.themoviedb.org/3"


const endpoints = {
    popular : `${baseurl}/movie/popular?api_key=${key}`,
    topRated : `${baseurl}/movie/top_rated?api_key=${key}`,
    trending : `${baseurl}/movie/popular?api_key=${key}`,
    upcoming : `${baseurl}/movie/upcoming?api_key=${key}`,
    comedy : `${baseurl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`
}

export default endpoints
