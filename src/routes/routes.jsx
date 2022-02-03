import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from '../pages/Home/index';
import City from '../pages/City/index';

import Nav from '../components/Nav/index';


const MyRoutes = () => {
   return(
       <BrowserRouter>
        <Nav />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/mycity" element={<City/>} />
        </Routes>
       </BrowserRouter>
   )
}

export default MyRoutes;