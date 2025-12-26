import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/products">Product List</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/dadJoke">Dad Joke</Link>
        </li>
      </ul>

      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme Toggler
      </button>
    </div>
  );
};

export default Home;
