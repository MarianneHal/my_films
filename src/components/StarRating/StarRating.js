import {StarRating} from "react-star-rating-input";

const StarsRating = ({children}) => {

    return(
          <div>
            <StarRating rating={(children/2)}
                         numberOfStars={5}
                         starRatedColor={'gold'}
                         starEmptyColor={'blue'}
                         starDimension={'15px'}
                         starSpacing={'2px'}/>
          </div>

    )

}

export {StarsRating};