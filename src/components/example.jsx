// import React from "react";



// USEREF HOOKI ORQALI FORUM BILAN ISHLASH
// import { useRef, useState } from "react"

// const Example = () =>{

//     const fname=useRef();
//     const password=useRef();

//     const [infoForum, setInfoForum] = useState({
//         fname:"",
//         password:""
//     });


    
//     const handleClick=(e)=>{
//         e.preventDefault();
//         setInfoForum((preveState) => ({
//             ...preveState,
//             fname: fname.current.value,
//             password: password.current.value
//         }))
//     }
    
//     console.log(infoForum)
    

//     return (
//         <div>
//             <form>
//                 <label>fname</label>
//                 <input name="fname" type="text"  
//                 ref={fname}                
//                 /> <br/>

//                 <label>password</label>
//                 <input 
//                 name="password" type="password"
//                 ref={password}
                
//                 />
//                 <button onClick={handleClick}>sendData</button>
//             </form>
//         </div>
//     )
// }

// export default Example;





// USESTSTE HOOKI ORQALI FORM BILAN ISHLASH

// import { useState } from "react"

// const Example = () =>{

//     const [infoForum, setInfoForum] = useState({
//         fname:"",
//         password:""
//     });


    
//     const handleClick=(e)=>{
//         e.preventDefault()
//         console.log(infoForum)
//     }

//     const handleChange=(e)=>{
//         e.preventDefault()
//         setInfoForum({
//             ...infoForum,
//             [e.target.name]:e.target.value
//         })
//     }

//     return (
//         <div>
//             <form>
//                 <label>fname</label>
//                 <input name="fname" type="text" 
//                 value={infoForum.fname} 
//                 onChange={handleChange}
                
//                 /> <br/>
//                 <label>password</label>
//                 <input 
//                 name="password" type="password" 
//                 value={infoForum.password} 
//                 onChange={handleChange} 
                
//                 />
//                 <button onClick={handleClick}>sendData</button>
//             </form>
//         </div>
//     )
// }

// export default Example;