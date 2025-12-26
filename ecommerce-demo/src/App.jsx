import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard";
import Counter from "./components/Counter";
import DadJoke from "./components/DadJoke";

function App() {
  const isLoggedIn = false;
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/dashboard" /> : <Home />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/dadJoke" element={<DadJoke />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
