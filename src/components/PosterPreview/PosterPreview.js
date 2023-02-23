

const PosterPreview = ({children, movieTitle}) => {

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${children}`} alt={movieTitle}/>
        </div>
    )
}
export {PosterPreview}