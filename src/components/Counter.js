import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementhandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementhandler = () => {
    dispatch({ type: "decrement" });
  };
  const increasehandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={increasehandler}>Increment by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
