import axios from "axios";

import {baseURL} from "../configs";


const apiService = axios.create({baseURL});

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGJjMmJiZWIxNWQ5NGQwNDc2OGUzZDE5NjY0ZDEyMyIsInN1YiI6IjYzZWY0ZWIzNWNjMTFkMDA4NjEyMWFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9hnHfHAuzvywcfDS39zkcr46wXKWtLG7jdW9pfeuFBc'

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer${accessToken}`
    return config;
})

apiService.interceptors.response.use((config) => {
    return config
})

export {
    apiService
};