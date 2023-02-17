import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesDetailsPage, MoviesPage, NotFoundPage} from "./pages";



function App() {
  return (
   <div>
       <Routes>

           <Route path={'/'} element={<MainLayout/>}>
               <Route index element={<Navigate to={'/movies'}/>}/>
               <Route path={'/movies'} element={<MoviesPage/>}/>
               <Route path={'/movies/:movieID'} element={<MoviesDetailsPage/>}/>
               <Route path={'*'} element={<NotFoundPage/>}/>
           </Route>
       </Routes>
   </div>
  );
}

export {App};
