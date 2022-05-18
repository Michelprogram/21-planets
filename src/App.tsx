
import './assets/css/App.css'
import "./assets/scss/style.scss"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Landing"
import Shop from './pages/Shop';
import Panier from "./pages/Panier"
import Login from "./pages/Login"

import Header from './common/components/Header';
import Footer from './common/components/Footer';
function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/panier"} element={<Panier />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    
  );
}

export default App
