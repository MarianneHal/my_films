import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faPlay} from "@fortawesome/free-solid-svg-icons";

import {movieAction} from "../../redux";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './movieDetails.module.css';
import {StarsRating} from "../StarRating/StarRating";
import {TrailerPlayer} from "../TrailerPlayer/TrailerPlayer";
import {MovieDetailsInfo} from "../MovieDetailsInfo/MovieDetailsInfo";



const MovieDetails = () => {
    const {movieID: id} = useParams();

    const navigate = useNavigate();

    const {movieDetails, loading, errors} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const {themes} = useSelector(state => state.theme)

    const [trailer, setTrailer] = useState(false);

    useEffect(() => {
        dispatch(movieAction.getById({id}))
        console.log(movieDetails);
    }, [id]);


    return (
        <div className={css.movie_container}>
            <button className={css.detailBtn} onClick={()=>navigate('/')}><FontAwesomeIcon icon={faClose}/></button>
            {loading && <div className={css.loading}>
                        <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'
                             alt="loading..."/>
                    </div>}
            { errors  && <div>{errors.status_message}</div> }
                        <div>
                            <h1 className={css.title}>{movieDetails.title}</h1>
                            <div className={css.upper}>
                                <div className={css.left}>
                                    {
                                        movieDetails.poster_path ?
                                            <PosterPreview
                                                movieTitle={movieDetails.title}>{movieDetails.poster_path}</PosterPreview> :
                                            <div className={css.background}>No photo</div>
                                    }
                                    {
                                        movieDetails.videos?.results ?
                                            <button className={css.btn}
                                                    onClick={() => setTrailer(true)}><FontAwesomeIcon icon={ faPlay }/> Play
                                                Trailer
                                            </button> :
                                            <div></div>
                                    }
                                    {trailer && <TrailerPlayer
                                        setTrailer={setTrailer}>{movieDetails.videos}</TrailerPlayer>}
                                </div>
                                <div className={css.right}>
                                    <MovieDetailsInfo movieDetails={movieDetails}/>
                                </div>
                            </div>
                            <div className={css.footer}>
                                <h3>Description</h3>
                                <div
                                     className={css.overview}>{movieDetails.overview}</div>
                            </div>

                        </div>
        </div>
    )
}


export {MovieDetails};