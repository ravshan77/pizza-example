import { observable ,action } from "mobx"

const store = observable({
    users:[],
})

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

export default store;



























// glabane store dagi food larni mobx (shunga) moslab chiqishim kerak

// import { observable, action, toJS } from "mobx"

// const store = observable({
//     item: [],
// })

// export const addFood = action((payload) =>{
//     console.log(payload)
//     console.log(toJS(store.item))
//     const toJs = toJS(store.item)

//     const existing =  toJs.find((item) => item.label === payload.label)

//     if (existing) {
//        return ( store.item = toJs.map((d) => {
//         return d.label === payload.label 
//             ? { ...d, count: d.count + 1 , cost: d.totalWeight * (d.count + 1)  } : d;
//         }));
//     }
//     return (store.item = [...toJs, {payload, count:1 }]);
// })

// const removeAll = action(() => {store.item =[]})

// export default store;