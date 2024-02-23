import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
export default function Products(props){
    
    const [count,setCount] = useState(0)
    const[test,setTest]= useState('')
    //tetbadel mara barka
    useEffect(()=>{
        console.log('im rendering1')
        console.log(count)
        return ()=>console.log("Im unmounting ") 
    },[])
    //kol mayetbadel l count 
    useEffect(()=>{
        console.log('im rendering2')
        console.log(count)
    },[count])
//fay changement ysir
    useEffect(()=>{
        console.log('im rendering3')
        console.log(count)
    })
    const increment =() =>{
        setCount(count+1)
    }
    const decrement =() =>{
        setCount(count-1)
    }
    const Navigate= useNavigate();
   const  versEventsPage=()=>{
        Navigate('/events')
    }
    console.log(count)
    console.log(props)
    return(
        <>
        <h1> Hello from functional component</h1>
        <button onClick={()=>setTest(test+1)}> changer test</button>
        <button onClick={increment}> Increment</button>
        <button onClick={decrement} >Decrement</button>
        {count}
        <button onClick={versEventsPage}>Navigate to Events Page</button>
        </>
    )
}