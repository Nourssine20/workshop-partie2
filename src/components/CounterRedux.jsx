import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions";

function CounterRedux(){
    const count =useSelector((state)=>state.count)
    const dispatch =useDispatch();
    return (
       <>
       <h1>{count}</h1>
       <button onClick={()=>dispatch(increment(2))}>+</button>
        <button onClick={()=>dispatch(decrement (2))}>-</button>
       </>

    )
}
export default CounterRedux;