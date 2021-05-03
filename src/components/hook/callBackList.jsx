import React,{ useEffect, useState } from 'react';

 
const CallBackList = ({createElement}) => {
    const [element, setElement]=useState([]);

    useEffect(() => {
        const newEl = createElement();
        setElement(newEl);
        console.log( "callBackList render buldi");

    },[createElement])
    
    return (
        <ul>
            {element.map((el , index) =>(
                <li key={index}>{el}</li>
            ))}
        </ul>
    );
}
 
 
export default CallBackList;