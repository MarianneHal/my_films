import {useSelector} from "react-redux";


const GenreBadge = ({children}) => {

    const {genre} = useSelector(state => state.genre);

    const badges = [];
    badges.length = 1;

    for (let id of children) {
        const find = genre.find(value => value.id === id);
        badges.push(find?.name);
    }

    return (
        <div>
            {badges.map((badge, index) => <div key={index}>{badge}</div>)}
        </div>
    )

};

export {GenreBadge};