import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {Footer} from "../components";


const MainLayout = () => {

    return (
        <div>
              <Header/>
              <Outlet/>
              <Footer/>
        </div>
    )
}

export {MainLayout}