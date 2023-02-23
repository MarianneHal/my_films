 import {PosterPreview} from "../PosterPreview/PosterPreview";
 import {StarsRating} from "../StarRating/StarRating";
 import css from './movieListCard.module.css'
 import {useNavigate} from "react-router-dom";
 import {MovieInfo} from "../MovieInfo/MovieInfo";
 import {GenreBadge} from "../GenreBadge/GenreBadge";
 import {useSelector} from "react-redux";


 const MovieListCard = ({movie}) => {


     const navigate = useNavigate();
     const {themes} = useSelector(state => state.theme)

     return (
        <div className={css.main} id={themes.card} onClick={()=>navigate(`/movies/${movie.id}`)}>
            <GenreBadge>{movie.genre_ids}</GenreBadge>
            {movie.poster_path? <PosterPreview movieTitle={movie.title}>{movie.poster_path}</PosterPreview> : <div>no photo</div>}
            <StarsRating>{movie.vote_average}</StarsRating>
            <MovieInfo movie={{...movie}}/>

        </div>
    );
};

export {MovieListCard};