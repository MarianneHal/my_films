

const Movie = ({movie}) => {
    const {title, poster_path} = movie;

    return(
        <div>
           <div>{title}</div>
            <img src={"https://image.tmdb.org/t/p/w300"+poster_path}/>
            <button>Show more</button>
        </div>
    )
}

export {Movie}