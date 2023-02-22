import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './layout.module.css';
import {MoviesPage} from "../pages";


const MainLayout = () => {

    return (
        <div className={css.main}>
              <Header/>
              <Outlet/>
              <MoviesPage/>

        </div>
    )
}

export {MainLayout}