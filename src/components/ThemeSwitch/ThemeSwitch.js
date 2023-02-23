import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import {themeActions} from "../../redux";
import css from './themeSwitch.module.css';

const ThemeSwitch = () => {

    const light_themes = {
        header: 'header_light',
        navbar: 'navbar_light',
        main: 'main_light',
        card: 'card_light',
        body: 'body_light',
        details: 'details_light',
        form: 'form_light',
        genres: 'genres_light'
    };

    const dark_themes = {
        header: 'header_dark',
        navbar: 'navbar_dark',
        main: 'main_dark',
        card: 'card_dark',
        body: 'body_dark',
        details: 'details_dark',
        form: 'form_dark',
        genres: 'genres_dark'
    };

    const {themes} = useSelector(state => state.theme);
    const dispatch = useDispatch();


    const toggleTheme = () => {
        themes.header === 'header_light' ?
            dispatch(themeActions.setTheme({...dark_themes})) :
            dispatch(themeActions.setTheme({...light_themes}));
    };

    return (<div className={css.switch}>

        <button onClick={toggleTheme}>
            {themes.header === 'header_light' ?
                <FontAwesomeIcon icon={ faMoon }  />:
                <FontAwesomeIcon icon={ faSun }  />}
        </button>

        {themes.header === 'header_light' ? <div>Dark</div> : <div> Light</div>}

    </div>)
}

export {ThemeSwitch};