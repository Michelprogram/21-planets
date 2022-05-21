import "./assets/scss/style.scss"
import React, { useContext, useMemo, useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import Header from './common/components/Header';
import Footer from './common/components/Footer';
import articles from "./constants/fakeData";

import DefaultRoute from "./routes/default"
import { UserProvider } from './context/UserContext';
import {PanierProvider} from "./context/panier"

function App() {  

  return (
    <BrowserRouter>
      <PanierProvider>
        <Header />
          <UserProvider value="">
            <Routes>
              {DefaultRoute}
            </Routes>
          </UserProvider>
        <Footer />
      </PanierProvider>
    </BrowserRouter>
    
  );
}

export default App
