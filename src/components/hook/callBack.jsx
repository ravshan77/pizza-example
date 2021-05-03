import React,{ useState, useCallback } from 'react';
import CallBackList from "./callBackList" 
const CallBack = () => {
    const [number ,setNumber]=useState(1)
    const [color ,setColor]=useState(false)

    const createElement = useCallback(() =>{
        return new Array(number)
        .fill("")
        .map((_, index) => `my element : ${index + 1}`);
    }, [number]);

    return (
        <div>
            <h1 style={{color: color ? "red" : "green"}}>number cont: {number}</h1>
            <button onClick={()=> setNumber((prev) => prev +1)}> add number</button>
            <button onClick={()=> setNumber((prev) => prev -1)}> minus number</button>
            <button onClick={()=> setColor((prev) => !prev)}> color </button>
            <CallBackList createElement={createElement} />
        </div>
    );
}

 
export default CallBack;