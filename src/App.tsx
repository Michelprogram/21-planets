
import './assets/css/App.css'
import "./assets/scss/style.scss"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Test"

function App() {

  return (
    <BrowserRouter>

        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App
