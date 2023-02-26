import {useSelector} from "react-redux";
import css from './genreBadges.module.css';
import {useSearchParams} from "react-router-dom";


const GenreBadge = ({children}) => {

    const {genres} = useSelector(state => state.genre);
    const {themes} = useSelector(state => state.theme);
    const [query, setQuery] = useSearchParams({page:'1'})


    const badges = [];
    badges.length = 1;

    for (let id of children) {
        const find = genres.find(value => value.id === id);
        badges.push(find?.name);
    }

    return (

             <div className={css.badges_wrapper}>
                 {badges.map((badge, index) => <div key={index} className={css.badge}>{badge}</div>)}
            </div>

    )
}



export {GenreBadge};