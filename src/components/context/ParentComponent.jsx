import React,{ useContext } from 'react';
import { ThemeContext } from "./ThemeProvider"
 


const ParentComponent = () => {
    const  context = useContext( ThemeContext )
    const { theme , light, dark }= context;
    const ourTheme = theme ? light : dark;
    return (
        
        
                            <div style={{ background: ourTheme.ui, color: ourTheme.textColor}}>
                                <h1>context api</h1>
                                <ul>
                                    <li>home</li>
                                    <li>home</li>
                                    <li>home</li>
                                </ul>
                            </div>

);
}

export default ParentComponent;















// const ParentComponent = () => {
//     return (
//         <ThemeContext.Consumer>
//             {(context) => {
//                 const { theme ,light ,dark } = context;
//                 const ourTheme = theme ? light : dark;
//                 return(
//                     <div style={{ background: ourTheme.ui, color: ourTheme.textColor}}>
//                         <h1>context api</h1>
//                         <ul>
//                             <li>home</li>
//                             <li>home</li>
//                             <li>home</li>
//                         </ul>
//                     </div>
//                 )
//             }}
//         </ThemeContext.Consumer>
//     );
// }

 
// export default ParentComponent;