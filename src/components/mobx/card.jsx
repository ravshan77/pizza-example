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