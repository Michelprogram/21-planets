import { Route } from 'react-router-dom';

import Home from "../pages/Landing"
import Shop from '../pages/Shop';
import Panier from "../pages/Panier"
import Login from "../pages/Login"
import About from "../pages/About"
import Support from '../pages/Support';
import News from '../pages/News';
import NotFound from '../pages/404';

export default [
    <Route path={"/"} element={<Home />} />,
    <Route path={"/login"} element={<Login />} />,
    <Route path={"/shop"} element={<Shop />} />,
    <Route path={"/panier"} element={<Panier />} />,
    <Route path={"/about"} element={<About />} />,
    <Route path={"/support"} element={<Support />} />,
    <Route path={"/news"} element={<News />} />,
    <Route path={"/*"} element={<NotFound />} />
]