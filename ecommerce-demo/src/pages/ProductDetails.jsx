import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { theme, setTheme } = useContext(AppContext);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID : {id}</p>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme Toggler
      </button>{" "}
      <button onClick={goHome}>Go back Home</button>
    </div>
  );
};

export default ProductDetails;
