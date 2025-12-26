import { useDispatch, useSelector } from "react-redux";
import { fetchJoke } from "../redux/jokeSlice";
import { useNavigate } from "react-router-dom";

const DadJoke = () => {
  const dispatch = useDispatch();
  const { joke, loading, error } = useSelector((state) => state.joke);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Dad Joke (using Redux Thunk)</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {joke && <p>{joke}</p>}

      <button onClick={() => dispatch(fetchJoke())}>Get a Joke</button>
      <br />
      <br />
      <button onClick={goHome}>Go back Home</button>
    </div>
  );
};

export default DadJoke;
