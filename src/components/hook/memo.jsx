import React,{ useState, useMemo } from 'react';

const func = (num) => {
    let i = 0;
    while ( i < 1000000000  ) i++;
    return num *2;
}

 
const Memo = () => {
    const [number,setNumber] =useState(0)
    const [colored,setColored] =useState(false)



    const txt =useMemo(() => {
        return  func(number)
    },[number])

    return (
        <div>
           <h1 style={{color: colored ? "red" : "green"}}> nmadur: {txt} </h1> 
           <button onClick={() => setColored((prev) => !prev)}>color</button>
           <button style={{margin:"30px"}} onClick={()=> setNumber((prev) => prev +1)}> add </button>
           <button onClick={()=> setNumber((prev) => prev -1)}> minus </button>
        </div>
    );
}
 

 
export default Memo ;