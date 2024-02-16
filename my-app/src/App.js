import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop/Shop";
import { ShopContextProvider } from "./context/shop-context";
import {Navbar} from "./components/navbar/Navbar";
import {useEffect} from "react";
import {PRODUCTS} from "./products";

function App() {
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(PRODUCTS));
  }, []);

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
