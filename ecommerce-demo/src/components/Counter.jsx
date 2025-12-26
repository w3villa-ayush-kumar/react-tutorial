import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>{" "}
      <button onClick={() => dispatch(decrement())}>-1</button>
      <br />
      <br />
      <button onClick={goHome}>Go back Home</button>
    </div>
  );
};

export default Counter;
