import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {genreAction, movieAction} from "../../redux";
import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";

const MovieList = () => {
    const {movies, prev, next} = useSelector(state => state.movies);
    const dispatch = useDispatch();

   const [query, setQuery] = useSearchParams({page:'1'})

    const [toggle, setToggle] = useState(false)

    const {genres} = useSelector(state => state.genre)

    const{register, handleSubmit} = useForm()
    useEffect(() => {

        dispatch(genreAction.getAll())

        dispatch(movieAction.getAll({
                page: query.get('page'),
            genre: query.get('with_genres')
            }));

    }, [query]);


    return(
        <div>
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>PREV</button>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>NEXT</button>
            </div>
            <form onSubmit={handleSubmit()}>
                <input type="text"
                       placeholder={'Search by name'} {...register('query')}/>
                <button>Search</button>
            </form>
            {
                toggle && <div>
                    {genres.map(genre => <button
                        onClick={() => setQuery({
                            page: '1',
                            with_genres: genre.id.toString()
                        })}
                        key={genre.id}>{genre.name}</button>)}
                </div>
            }
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Close' : 'Show Genres'}</button>
            {
                query.get('with_genres') ?
                    <h2>{(genres.find(value => value.id === parseInt(query.get('with_genres'))))?.name} genre</h2> :
                    <div></div>
            }
            {
                query.get('query') ?
                    <h2>Results of search «{query.get('query')}»</h2> :
                    <div></div>
            }


            <div>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
        </div>
    );
}

export {MovieList}