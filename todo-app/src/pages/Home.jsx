import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/registration");
  };
  return (
    <div>
      <h2>Home</h2>
      <p>For registration </p>
      <button onClick={handleNavigation}>Register</button>
    </div>
  );
};

export default Home;
