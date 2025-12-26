import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Products = () => {
  const { theme, setTheme } = useContext(AppContext);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
      </ul>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme Toggler
      </button>{" "}
      <button onClick={goHome}>Go back Home</button>
    </div>
  );
};

export default Products;
