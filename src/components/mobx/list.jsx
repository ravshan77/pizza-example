import React from "react";
import { observer } from "mobx-react"
import store from "./store";

import User from "./user";

const List = observer (() =>{
    return store.users.map((user) =>{
        return <User key={user.login.uudi} {...user} />;
    })
})

export default List;