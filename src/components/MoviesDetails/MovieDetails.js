import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {movieAction} from "../../redux";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './movieDetails.module.css';
import {StarsRating} from "../StarRating/StarRating";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";




const MovieDetails = () => {
    const {movieID: id} = useParams();

    const navigate = useNavigate();

    const {movieDetails} = useSelector(state => state.movies);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(movieAction.getById({id}))
    }, [id]);


    return (
        <div className={css.mainDiv}>
            <div>{
                movieDetails.poster_path && <PosterPreview movieTitle={movieDetails.title}>{movieDetails.poster_path}</PosterPreview>
            }</div>
            <div className={css.main}>
                <h1 className={css.title}>{movieDetails.title}</h1>
                    <h2 className={css.textOverview}>{movieDetails.overview}</h2>
                <h2 className={css.title}>{movieDetails.release_date}</h2>
                <StarsRating>{movieDetails.vote_average}</StarsRating>
                <button className={css.detailBtn} onClick={()=>navigate('/')}><FontAwesomeIcon icon={faClose}/></button>
            </div>
            </div>
                )
}

export {MovieDetails};