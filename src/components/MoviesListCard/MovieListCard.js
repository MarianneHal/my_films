 import {PosterPreview} from "../PosterPreview/PosterPreview";

 const MovieListCard = ({movie}) => {


    return (
        <div>
            <div>{movie.title}</div>
            {movie.poster_path? <PosterPreview movieTitle={movie.title}>{movie.poster_path}</PosterPreview> : <div>no photo</div>}
        </div>
    );
};

export {MovieListCard};