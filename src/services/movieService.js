import {apiService} from "./apiService";
import {urls} from "../configs";



const movieService = {
    getAll: (page =1, genre='') => apiService.get(urls.movies, {params:{page, with_genres:genre}}),
    searchMovies: (query='', page = 1) => apiService.get(urls.search, {params:{page, query}}),
    getById: (id) => apiService.get(`${urls.movie}/${id}&append_to_response=videos`)
};

export {
    movieService
};
