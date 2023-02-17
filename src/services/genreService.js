import {apiService} from './apiService';
import {urls} from "../configs";

const genreService = {
    getGenres: () => apiService.get(urls.genres)
};

export {
    genreService
};