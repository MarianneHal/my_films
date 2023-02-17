import {apiService} from "./apiService";
import {urls} from "../configs";



const movieService = {
    getAll: (page) => apiService.get(`${urls.movies}${page}`),
    searchMovies: (name) => apiService.get(`${urls.search}${name}`),
    getGenre:() => apiService.get(urls.genres)
};

export {
    movieService
};
