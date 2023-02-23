import css from './movieInfo.module.css'


const MovieInfo = ({movie}) => {

    return (
        <div className={css.movie_info}>
            <div className={css.upper}>
                <div className={css.movie_title}>{movie.title}</div>
            </div>
        </div>
    )
}

export {MovieInfo}