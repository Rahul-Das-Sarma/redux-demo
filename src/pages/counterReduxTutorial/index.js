import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  multiplyBy10,
} from "./store/slices/counterSlices/counterSlice";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>Hello world</h1>
      <h3>{value}</h3>
      <button onClick={() => dispatch(increment())}>+ increment</button>
      <button onClick={() => dispatch(decrement())}>- decrement</button>
      <button onClick={() => dispatch(multiplyBy10())}>multiply By 10</button>
    </div>
  );
}

export default App;
