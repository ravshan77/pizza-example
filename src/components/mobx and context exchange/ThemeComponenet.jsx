import React from 'react';
import { observer } from "mobx-react"
import { handleTheme } from "./context exchange mobx"
import  store  from "./context exchange mobx" 
const ThemeComponenet =observer( () => {

    const { theme , light, dark }= store;
    const ourTheme = theme ? light : dark;

    return (
        <div>
            <h1 style={{ background: ourTheme.ui, color: ourTheme.textColor}}>The history of textbooks dates back to ancient civilizations. For example, Ancient Greeks wrote educational texts. The modern textbook has its roots in the mass production made possible by the printing press. Johannes Gutenberg himself may have printed editions of Ars Minor, a schoolbook on Latin grammar by Aelius Donatus. Early textbooks were used by tutors and teachers (e.g. alphabet books), as well as by individuals who taught themselves.</h1>
            <button onClick={handleTheme} style={{width:"130px",height:"30px", margin:"30px"}}> handle theme </button>
        </div>
    );
})

 
export default ThemeComponenet;