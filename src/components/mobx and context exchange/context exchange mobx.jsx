// Vazifa: contexdagi theme exampleni mobx orqali  amalga oshirish

import { observable ,action } from "mobx"

const store = observable({
    theme: true,
    light: { textColor: '#555' , ui: "#ddd" , bg: "#333" },
    dark: { textColor: '#ddd' , ui: "#333" , bg: "#555"},
})

export default store;

export const handleTheme = () => {
    return store.theme = !store.theme
};
