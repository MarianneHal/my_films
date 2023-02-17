import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout, AuthRequireLayout} from "./layouts";
import {LoginPage, MoviesDetailsPage, MoviesPage, NotFoundPage, RegisterPage} from "./pages";



function App() {
  return (
   <div>
       <Routes>

           <Route path={'/'} element={<MainLayout/>}>
               <Route index element={<Navigate to={'/movies'}/>}/>
               <Route path={'/movies'} element={<MoviesPage/>}/>
               <Route path={'/movies/:movieID'} element={<AuthRequireLayout><MoviesDetailsPage/></AuthRequireLayout>}/>
               <Route path={'/login'} element={<LoginPage/>}/>
               <Route path={'/register'} element={<RegisterPage/>}/>
               <Route path={'*'} element={<NotFoundPage/>}/>
           </Route>
       </Routes>
   </div>
  );
}

export {App};
