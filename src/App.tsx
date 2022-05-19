import "./assets/scss/style.scss"

import { BrowserRouter, Routes } from 'react-router-dom';

import Header from './common/components/Header';
import Footer from './common/components/Footer';

import DefaultRoute from "./routes/default"

function App() {

  return (
    <BrowserRouter>
        <Header />
          <Routes>
            {DefaultRoute}
          </Routes>
        <Footer />
    </BrowserRouter>
    
  );
}

export default App
