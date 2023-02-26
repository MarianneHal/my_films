import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

import {movieAction} from "../../redux";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './movieDetails.module.css';
import {MovieDetailsInfo} from "../MovieDetailsInfo/MovieDetailsInfo";
import {movieService} from "../../services";



const MovieDetails = () => {
    const {movieID: id} = useParams();

    const navigate = useNavigate();

    const {movieDetails, loading, errors} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const {themes} = useSelector(state => state.theme)

    const [key, setKey] = useState();

    useEffect(() => {
        dispatch(movieAction.getById({id}))
        console.log(movieDetails);
    }, [id]);

    useEffect(() => {
        movieService.getVideos(id).then(({data})=>setKey(data.results[0].key))
    }, [])


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

                                </div>
                                <div className={css.right}>

                                    <iframe src={`https://www.youtube.com/embed/${key}`} key={id}></iframe>

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