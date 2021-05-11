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

// const Example = () => {
//   const colors = [
//     { color: "red" },
//     { color: "blue" },
//     { color: "green" },
//     { color: "yellow" },
//     { color: "red" },
//     { color: "red" },
//     { color: "green" },
//     { color: "green" },
//   ];

  // necha xil rang bulsa shuncha uzgaruvchi ochamiz

//   const [value, setValue]=React.useState("")

//   let red = 0;
//   let blue = 0;
//   let green = 0;
//   let yellow = 0;

//   const handleColor = () =>{
//     if (red > blue && red > green && red > yellow) {
//         setValue(red)
//         console.log( " red eng ko'p qatnashgan rang: ",red ," ta")
//     } else if ( blue > red && blue > green && blue > yellow){
//         setValue(blue)
//         console.log(" blue eng ko'p qatnashgan rang: ",blue ," ta")
//     } else if ( green > red && green > blue && green > yellow){
//         setValue(green)
//         console.log(" green eng ko'p qatnashgan rang: ",green ," ta")
//     } else{
//         setValue(yellow)
//         console.log(" yellow eng ko'p qatnashgan rang: ",yellow ," ta")
//     }
//   }


//   return (
//       <div>
//       {colors.map((cols) => {
//           if (cols.color == "red") {
//               red++;
//             } else if (cols.color == "blue") {
//                 blue++;
//             } else if (cols.color == "green") {
//                 green++;
//             } else if (cols.color == "yellow") {
//                 yellow++;
//             }
//             console.log("ranglar ", red, blue, green, yellow);
            
            
//         }
//         )
        
//     }

// <h1>jjjjjjjjj{value}</h1>
//     { colors && handleColor()}
      
      
//     </div>
//   );
// };

// export default Example;


// import React,{ useState } from "react";


// const StateBtn = () => {
//   const [states,setStates]= useState(1);

//   const handleColor = (e)=> {
//     e.preventDefault();
//     setStates(e.target.name)
//   }

//   return (
//     <div style={{display:"flex",}}>
//       <button style={{backgroundColor: states == 1 ? "black" : "white"}} name="1" onClick={(e)=> handleColor(e)}>home 1</button>
//       <button style={{backgroundColor: states == 2 ? "black" : "white"}} name="2" onClick={(e)=> handleColor(e)}>abute 2</button>
//       <button style={{backgroundColor: states == 3 ? "black" : "white"}} name="3" onClick={(e)=> handleColor(e)}>contact 3</button>
//       <button style={{backgroundColor: states == 4 ? "black" : "white"}} name="4" onClick={(e)=> handleColor(e)}>footer 4</button>
//     </div>
//   )
// }

// export default StateBtn;