import {Link} from "react-router-dom";

import css from './header.module.css';


const Header = () => {
    return(
        <div className={css.header}>
            <Link to={'/movies'}>MOVIES</Link>
            <Link to={'/register'}>REGISTER</Link>
            <Link to={'/login'}>LOGIN</Link>
        </div>
    );
}

export {
    Header
}
