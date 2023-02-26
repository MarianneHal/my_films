import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight, faAngleLeft,
    faAngleRight,
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

import {genreAction, movieAction} from "../../redux";
import {MovieListCard} from "../MoviesListCard/MovieListCard";
import css from './movieList.module.css';
import {PopularMovies} from "../PopularMovies/PopularMovies";


const MovieList = () => {
    const {movies, totalPages, currentPage, loading,errors} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page:'1'})

    const [toggle, setToggle] = useState(false)

    const {genres} = useSelector(state => state.genre)

    const {themes} = useSelector(state => state.theme)

    const{register, handleSubmit, reset} = useForm()

    useEffect(() => {

        if(!query.get('query')) {
            dispatch(genreAction.getGenres())

            dispatch(movieAction.getAll({
            page: query.get('page'),
            genre: query.get('with_genres')
            }));}
        else{
            dispatch(movieAction.search({page: query.get('page'),query: query.get('query')}))
        }

    }, [query]);

    const submit = (data) => {
        if (data.query) {
            setQuery({query: data.query, page: '1'})
        }
        reset();
    };

    const toFirst = () => {
        if (query.get('query')) {
            setQuery({query: query.get('query'), page: '1'});
        } else if (query.get('with_genres')) {
            setQuery({page: '1', with_genres: query.get('with_genres').toString()});
        } else {
            setQuery({page: '1'});
        }
        window.scrollTo(0, 0);
    };

    const prev = () => {
        if (query.get('query')) {
            setQuery(value => ({query: query.get('query'), page: value.get('page') - 1}));
        } else if (query.get('with_genres')) {
            setQuery(value => ({
                page: value.get('page') - 1,
                with_genres: query.get('with_genres').toString()
            }));
        } else {
            setQuery(value => ({page: value.get('page') - 1}));
        }
        window.scrollTo(0, 0);
    };

    const next = () => {
        if (query.get('query')) {
            setQuery(value => ({query: query.get('query'), page: +value.get('page') + 1}));
        } else if (query.get('with_genres')) {
            setQuery(value => ({
                page: +value.get('page') + 1,
                with_genres: query.get('with_genres').toString(),
            }));
        } else {
            setQuery(value => ({page: +value.get('page') + 1}));
        }
        window.scrollTo(0, 0);
    };

    const toLast = () => {
        if (query.get('query')) {
            setQuery({query: query.get('query'), page: totalPages.toString()});
        } else if (query.get('with_genres')) {
            setQuery({
                page: totalPages.toString(),
                with_genres: query.get('with_genres').toString()
            });
        } else {
            setQuery({page: totalPages.toString()});
        }
        window.scrollTo(0, 0);
    };


    return(

        <div>
            {loading && <div className={css.loading}><img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' alt="loading..."/> </div>}

            {errors && <div className={css.error}>{errors.status_message}</div>}

            <div className={css.popular}>
               <PopularMovies/>
            </div>

            <div className={css.form}>
                <button className={css.btn_genres} onClick={() => setToggle(!toggle)}>{toggle ? 'CLOSE' : 'SHOW GENRES'}</button>
                <form onSubmit={handleSubmit(submit)}>
                <input className={css.input} type="text"
                       placeholder={'Search by name'} {...register('query')}/>
                <button className={css.btn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
            </div>

            <div className={css.genres}>
                    { toggle && genres.map(genre => <button className={css.btn_genre} id={themes.genres} onClick={() => setQuery({
                            page: '1',
                            with_genres: genre.id.toString()
                        })}
                        key={genre.id}>{genre.name}</button>)}
            </div>


            { query.get('genre') ? <h2>{(genres.find(value => value.id === parseInt(query.get('genre'))))?.name} genre</h2> : <div></div>}

            <div className={css.movie}> {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)} </div>


            <div className={css.pagination}>
                <button disabled={query.get('page') === '1'}
                        onClick={toFirst}><FontAwesomeIcon icon={faAngleDoubleLeft}/></button>

                <button disabled={query.get('page') === '1'}><FontAwesomeIcon icon={faAngleLeft}/></button>
                <div className={css.page}>{query.get('page')}</div>
                <button onClick={next}><FontAwesomeIcon icon={faAngleRight}/></button>
                <button onClick={toLast}><FontAwesomeIcon icon={faAngleDoubleRight}/></button>
            </div>

        </div>

    );
}


export {MovieList}