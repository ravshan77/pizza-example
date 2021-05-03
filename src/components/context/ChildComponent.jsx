
import { ThemeContext } from "./ThemeProvider"


import React,{ useContext } from 'react';

const ChildComponent = () => {
    const context = useContext( ThemeContext )

    const { theme, light, dark } = context;
    const ourTheme = theme ? light : dark;
    
    return(
            <div style={{ background: ourTheme.bg, color: ourTheme.textColor}}>
                        <ul>
                            <li style={{background: ourTheme.ui}}>llorema sjkks dfjffjc</li>
                            <li style={{background: ourTheme.ui}}>llorema sjkks dfjffjc</li>
                            <li style={{background: ourTheme.ui}}>llorema sjkks dfjffjc</li>
                        </ul>
                    </div>
        )
    }

    export default ChildComponent;
                
                
                
                
// import React,{ Component } from 'react';
// export default class ChildComponent extends Component {
//     static contextType = ThemeContext

//     render() {
//         const { theme, light, dark } = this.context;
//         const ourTheme = theme ? light : dark;
//         return(
//             <div style={{ background: ourTheme.bg, color: ourTheme.textColor}}>
//                         <ul>
//                             <li style={{background: ourTheme.ui}}>llorema sjkks dfjffjc</li>
//                             <li style={{background: ourTheme.ui}}>llorema sjkks dfjffjc</li>
//                             <li style={{background: ourTheme.ui}}>llorema sjkks dfjffjc</li>
//                         </ul>
//                     </div>
//         )
//     }
// }