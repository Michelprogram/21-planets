import "./assets/scss/style.scss";
import { BrowserRouter, Routes } from "react-router-dom";

import Header from "./common/components/Header";
import Footer from "./common/components/Footer";

import DefaultRoute from "./routes/default";
import CategoriesRoute from "./routes/categories";
import { UserProvider } from "./context/UserContext";
import { PanierProvider } from "./context/panier";
import ScrollTop from "./common/components/ScrollTop";
import { DataProvider } from "./context/Data";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <DataProvider>
        <PanierProvider>
          <Header />
          <UserProvider value="">
            <Routes>
              {DefaultRoute}
              {CategoriesRoute}
            </Routes>
          </UserProvider>
          <Footer />
        </PanierProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
