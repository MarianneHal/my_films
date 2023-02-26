import {MovieDetails} from "../../components";
import css from './moviesDatailPage.module.css'
import {useSelector} from "react-redux";

const MovieDetailPage = () => {

    const {themes} = useSelector(state => state.theme)

    return (
        <div className={css.main} id={themes.details}>
    <MovieDetails/>
        </div>
    )
}

export {MovieDetailPage}