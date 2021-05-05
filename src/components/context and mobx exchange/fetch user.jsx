// Vazifa: mobxdagi random users exampleni context orqali  amalga oshirish

import React,{ createContext } from 'react'

export const userContext = createContext();

const ThemeProvider =()=>{
    
    const getUsers = action(() => {
        fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results);
            store.users = data.results;
        })
        .catch((err) => console.log(err));
    });
    
    getUsers();    
        
    
    export const getUserLength = () =>{
        return store.users.length;
    };

    export const getMale = () =>{
        return store.users.filter((user) => user.gender === "male").length
    };

    export const deleteUser = (payload) => {
        return store.users = store.users.filter((user) => user.cell !== payload)
    };
        return (
            <div>
            <ThemeContext.Provider value={getUserLength, getMale, deleteUser }>
                {this.props.children}
            </ThemeContext.Provider>
            </div>
        )
}

export default ThemeProvider;