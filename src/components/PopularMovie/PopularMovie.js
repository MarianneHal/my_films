import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './popularMovie.module.css'


const PopularMovie = ({movie}) => {

    return (
        <div className={css.main}>
            <img className={css.img} src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}/>
        </div>
    )
}

export {PopularMovie}