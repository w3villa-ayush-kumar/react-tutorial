import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { theme, setTheme } = useContext(AppContext);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme Toggler
      </button>{" "}
      <button onClick={goHome}>Go back Home</button>
    </div>
  );
};

export default NotFound;
