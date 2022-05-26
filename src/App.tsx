import "./assets/scss/style.scss"
import { BrowserRouter, Routes } from 'react-router-dom';

import Header from './common/components/Header';
import Footer from './common/components/Footer';

import DefaultRoute from "./routes/default"
import { UserProvider } from './context/UserContext';
import {PanierProvider} from "./context/panier"
import { SelectedItemProvider } from "./context/SelectedItemContext";

function App() {  

  return (
    <BrowserRouter>
      <PanierProvider>
        <Header />
          <UserProvider value="">
            <SelectedItemProvider value={{}}>
              <Routes>
                {DefaultRoute}
              </Routes>
            </SelectedItemProvider>
          </UserProvider>
        <Footer />
      </PanierProvider>
    </BrowserRouter>
    
  );
}

export default App
