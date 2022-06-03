import "./assets/scss/style.scss";
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import Header from "./common/components/Header";
import Footer from "./common/components/Footer";

import DefaultRoute from "./routes/default";
import CategoriesRoute from "./routes/categories";
import { UserProvider } from "./context/UserContext";
import { PanierProvider } from "./context/panier";
import { SelectedItemProvider } from "./context/SelectedItemContext";
import ScrollTop from "./common/components/ScrollTop";
import { DataProvider } from "./context/Data";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <PanierProvider>
        <Header />
        <UserProvider value="">
          <DataProvider>
            <SelectedItemProvider value={{}}>
              <Routes>
                {DefaultRoute}
                {CategoriesRoute}
              </Routes>
            </SelectedItemProvider>
          </DataProvider>
        </UserProvider>
        <Footer />
      </PanierProvider>
    </BrowserRouter>
  );
}

export default App;
