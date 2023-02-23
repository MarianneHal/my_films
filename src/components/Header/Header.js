

import css from './header.module.css';
import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";
import {useSelector} from "react-redux";
import {UserInfo} from "../UserInfo/UserInfo";


const Header = () => {


    const {themes} = useSelector(state => state.theme);
    return(
        <div className={css.header} id={themes.header}>
         <ThemeSwitch/>
            <UserInfo/>
        </div>
    );
}

export {
    Header
}
