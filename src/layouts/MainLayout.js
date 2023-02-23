import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './layout.module.css';
import {MoviesPage} from "../pages";
import {useSelector} from "react-redux";


const MainLayout = () => {

    const {themes} =useSelector(state => state.theme)

    return (
        <div id={themes.body} className={css.main}>
              <Header/>
              <Outlet/>
              <MoviesPage/>

        </div>
    )
}

export {MainLayout}