import {useSelector} from "react-redux";
import css from './genreBadges.module.css';


const GenreBadge = ({children}) => {

    const {genres} = useSelector(state => state.genre);

    const badges = [];
    badges.length = 1;

    for (let id of children) {
        const find = genres.find(value => value.id === id);
        badges.push(find?.name);
    }

    return (
        <div className={css.badges_wrapper}>
            {badges.map((badge, index) => <div className={css.badge} key={index}>{badge}</div>)}
        </div>
    )

};

export {GenreBadge};