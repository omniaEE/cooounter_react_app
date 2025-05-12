import { useState } from "react";
import style from "./style.module.css";


const CounterFun = () => {
    const [count, setCount]=useState(0);
    const increment =()=>{
        setCount(count+1)
    }
    const decrement =()=>{
        setCount(count-1)
    }
  return (
    <div className={style.CounterFun}>
      <h2>Counter function </h2>
      <button onClick={decrement}>-</button>
       <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
export default CounterFun;