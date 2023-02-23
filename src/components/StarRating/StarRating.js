import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({children}) => {

    return(
          <div>
            <StarRatings rating={(children)}
                         numberOfStars={10}
                         starRatedColor={'gold'}
                         starEmptyColor={'blue'}
                         starDimension={'15px'}
                         starSpacing={'2px'}/>
          </div>

    )}

export {StarsRating};