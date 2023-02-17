import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {movieAction} from "../../redux";

import {Movie} from "../Movie/Movie";


const Movies = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        dispatch(movieAction.getAll())
    }, [dispatch])

     return(
           <div>
               {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
           </div>
)}

export {Movies}