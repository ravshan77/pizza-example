import React, { useContext } from 'react';
import { ThemeContext } from "./ThemeProvider"
const ToggleBtn = () => {
    const context = useContext( ThemeContext )
    const { themeToggle } = context;
    
    return <button onClick={ themeToggle }> chenge color </button>
    
}

export default ToggleBtn;



















// const ToggleBtn = () => {
//     return (
//         < ThemeContext.Consumer >
//             {(context) => {
//                 const { themeToggle } = context;
//                 return <button onClick={ themeToggle }> chenge color </button>
//             }}
//         </ ThemeContext.Consumer >
//     );
// }


// export default ToggleBtn;