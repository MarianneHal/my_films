import {Outlet} from "react-router-dom";

import {Header, Movies} from "../components";



const MainLayout = () => {

    return (
        <div>
              <Header/>
              <Outlet/>
             <Movies/>


        </div>
    )
}

export {MainLayout}