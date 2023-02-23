import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, NotFoundPage} from "./pages";
import {MovieDetailPage} from "./pages/MovieDetailPage/MovieDetailPage";



function App() {
  return (
   <div>
       <Routes>

           <Route path={'/'} element={<MainLayout/>}>
               <Route path={'*'} element={<NotFoundPage/>}/>
               <Route path={'/movies/:movieID'} element={<MovieDetailPage/>}/>
           </Route>
       </Routes>
   </div>
  );
}

export {App};
