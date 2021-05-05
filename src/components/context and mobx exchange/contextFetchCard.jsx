import React,{ useContext } from 'react';
import { ThemeContext } from ".."
 


const ParentComponent = () => {
    const  contextUser = useContext( userContext )
    contextUser={ getUserLength , getUser ,getMale }
    
    const [fetcher , setFetcher] = useState(
        fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        store.users = data.results;
    })
    .catch((err) => console.log(err))
    )

    return (
        <div style={{
            padding:"20px",
            boxShadow:"0 0 10px black",
            width:"350px",
            margin:"20px auto"
        }}>
            <p>All: {getUserLength()}</p>
            <p>Male: {getMale()}</p>
            <p>Female: {getUserLength() - getMale()}</p>
        </div>
);
}

export default ParentComponent;

////////////////////////////////

import React from "react";

import { observer } from "mobx-react"

import { getUserLength, getMale } from "./store"

const Card = observer (() => {
    return (
        <div style={{
            padding:"20px",
            boxShadow:"0 0 10px black",
            width:"350px",
            margin:"20px auto"
        }}>
            <p>All: {getUserLength()}</p>
            <p>Male: {getMale()}</p>
            <p>Female: {getUserLength() - getMale()}</p>
        </div>
    )
})

export default Card;