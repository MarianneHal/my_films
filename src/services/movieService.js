import {apiService} from "./apiService";
import {urls} from "../configs";




const movieService = {
    getAll: (page=1, genre='') => apiService.get(urls.movies, {params: {page, genre}}),
    searchMovies: (query='', page=1) => apiService.get(urls.search, {params: {query, page}}),
    getGenre:() => apiService.get(urls.genres)
};



export {
    movieService
}