
import './assets/css/App.css'
import "./assets/scss/style.scss"

import { BrowserRouter, Routes } from 'react-router-dom';

import Header from './common/components/Header';
import Footer from './common/components/Footer';

import DefaultRoute from "./routes/default"
import { UserProvider } from './utils/UserContext';

function App() {

  return (
    <BrowserRouter>
        <Header />
          <UserProvider value="">
            <Routes>
              {DefaultRoute}
            </Routes>
          </UserProvider>
        <Footer />
    </BrowserRouter>
    
  );
}

export default App
