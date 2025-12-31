import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const Dashboard = () => {
  const { theme, setTheme } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme Toggler
      </button>{" "}
      <button onClick={goHome}>Go back Home</button>{" "}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
