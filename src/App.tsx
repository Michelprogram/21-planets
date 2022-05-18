
import './assets/css/App.css'
import "./assets/scss/style.scss"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Test"
import Login from "./pages/Login"

function App() {

  return (
    <BrowserRouter>

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login/>} />
        </Routes>

    </BrowserRouter>
  );
}

export default App
