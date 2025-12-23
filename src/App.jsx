import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Products from "./pages/Products";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
    return () => clearInterval();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
