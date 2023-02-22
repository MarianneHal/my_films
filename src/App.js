import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, NotFoundPage} from "./pages";



function App() {
  return (
   <div>
       <Routes>

           <Route path={'/'} element={<MainLayout/>}>
               <Route path={'*'} element={<NotFoundPage/>}/>
           </Route>
       </Routes>
   </div>
  );
}

export {App};
