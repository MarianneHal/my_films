import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {NotFoundPage, MoviesPage} from "./pages";
import {MovieDetailPage} from "./pages/MovieDetailPage/MovieDetailPage";



function App() {

    return (
   <div>
       <Routes>

           <Route path={'/'} element={<MainLayout/>}>
               <Route index element={<MoviesPage/>}/>
               <Route path={'/movies'} element={MoviesPage}/>
               <Route path={'*'} element={<NotFoundPage/>}/>
               <Route path={'/movies/:movieID'} element={<MovieDetailPage/>}/>

           </Route>
       </Routes>
   </div>
  );
}

export {App};
