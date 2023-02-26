import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieAction} from "../../redux";
import {PopularMovie} from "../PopularMovie/PopularMovie";
import css from './popularMovies.module.css'


const PopularMovies = () => {

    const dispatch = useDispatch();
    const {popular} = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(movieAction.getPopular())
    },[dispatch])

    return(
        <div className={css.mainDiv}>
          <div className={css.main}>
            {popular.map(movie => <PopularMovie key={movie.id} movie={movie}/>)}
          </div>
        </div>
    )
}

export {PopularMovies}