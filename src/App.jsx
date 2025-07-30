// // // // import React from "react";
// // // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // // import Signup from "./signup"; 
// // // // import Login from "./login";

// // // // function App() {
// // // //   return (
// // // //     <div>
// // // //       <BrowserRouter>
// // // //         <Routes>
// // // //           <Route path="/" element = {<Login/>}></Route>
// // // //           <Route path="/signup" element={<Signup />}></Route>
// // // //         </Routes>
// // // //       </BrowserRouter>
// // // //     </div>
// // // //   );
// // // // }


// // // // export default App;

// // // import React,{Component} from "react";

// // // class App extends Component {
// // //   render(){
// // //     return(
// // //       <div>
// // //         <h1>i am the class Components</h1>
// // //       </div>
// // //     )
// // //   }
// // // }export default App

// // import React from "react";

// // function App (){
// //   var admin = true
// //   var content;
// //   if(admin){
// //     content ="i am admin"
// //   }else{
// //     content ="i am user"
// //   }
// //   return(
// //     <div>
// //       <h1>{content}</h1>

// //     </div>
// //   )
// // }export default App

// // import React from "react";

// // function App(){
// //   var admin = true
// //   return(
// //     <div>
// //       <h1>{admin? "i am the admin": "i am the user"} </h1>

// //     </div>
// //   )
// // }export default App

// // import React from "react";
// // import Login from "./login";
// // import Signup from "./signup";

// // function App(){
// //   var admin = false
// //   var content;
// //   if(admin){
// //     content=<Login/>
// //   }else{
// //     content=<Signup/>
// //   }

// //   return(
// //     <div>
// //       <h1>{content}</h1>

// //     </div>
// //   )
// // }export default App

// // import React from "react";
// // import Login from "./login";
// // import Signup from "./signup";

// // function App(){
// //   var admin = true
// //   return(
// //     <div>
// //       <h1>{admin? <Login/>:<Signup/>}</h1>

// //     </div>
// //   )
// // }export default App

// // import React from "react";

// // function App(){
// //     var sanju = false
// //     var con
// //     return(
// //         <div>
// //             <h1>{sanju?"i am the idiot":"i am the not idiot"}</h1>

// //         </div>
// //     )
// // }export default App

// // import React from "react";

// // function App(){
// //     var kishore=false
// //     var content;
// //     if(true){
// //         content="kisore is cunning"
// //     }else{
// //         content="kishore is not cunning"
// //     }
// //     return(
// //         <div>
// //             <h1>{content}</h1>

// //         </div>
// //     )
// // }export default App

// // import React, { useState } from "react";

// // function App(){
// //     var [Count,setCount]=useState(0)
// //     console.log(Count);

// //     function handleUpdate(){
// //         setCount(Count+1)
// //     }

// //     function handleDec(){
// //         setCount(Count-1)
// //     }

// //     function reset(){
// //         setCount(0)
// //     }
    
// //     return(
// //         <div>
// //             <h1>{Count}</h1>
// //             <button onClick={handleUpdate}>increment</button>
// //             <button onClick={handleDec}>decrement</button>
// //             <button onClick={reset}>reset</button>

// //         </div>
// //     )
// // }export default App

// // import React, { useEffect, useState } from "react";

// // function App(){
// //     var [data,setData]=useState([])
// //     async function fetchData(){
// //         var myData=await fetch("https://fakestoreapi.com/products")
// //         var result= await myData.json()
// //         setData(result)
// //     }
// //     console.log(data);
// //     useEffect(()=>{
// //   fetchData()

// // },[])

    
// //     return(
// //         <div>
// //              {
// //         data.map((item)=>{
// //           return(
// //             <div key={item.id}>
// //               <h1>{item.price}</h1>
// //               <h1>{item.title}</h1>
// //               <h1>{item.description}</h1>
// //             </div>
// //           )
// //         })
// //       }
// //         </div>
// //     )
// // }export default App

// // import React, { useEffect, useState } from "react";

// // function App(){
// //     var [data, setdata] = useState([])
// //     async function fetchData(){
// //         var myData = await fetch("https://fakestoreapi.com/products")
// //         var result = await myData.json()
// //         setdata(result)
// //     }useEffect(()=>{
// //         fetchData()
// //     },[])

// //     return(
// //         <div>
// //             {
// //                 data.map((item)=>{
// //                     return(
// //                         <div style={{backgroundColor:"lightgreen"}}>
// //                             <h1 style={{color:"blue", backgroundColor:"greenyellow"}}>{item.id}</h1>
// //                             <h2 style={{color:"red"}}>{item.title}</h2>
// //                             <h3 style={{color:"violet"}}>{item.price}</h3>
// //                             <h4 style={{color:"green"}}>{item.description}</h4>
// //                             <img src={item.image} width={100} height={100} style={{justifyContent:"center"}} alt="" />
// //                         </div>
// //                     )

// //                 })
// //             }
            

// //         </div>
// //     )
// // }export default App

// // import React from "react";
// // import{BrowserRouter,Routes,Route} from"react-router-dom"
// // import Login from "./login";
// // import Signup from "./signup";
// // import Home from "./home";

// // function App(){
// //     return(
// //         <div>
// //             <BrowserRouter>
// //             <Routes>
// //                 <Route path='/' element={<Login/>}></Route>
// //                 <Route path='/signup' element={<Signup/>}></Route>
// //                 <Route path='/Home' element= {<Home/>}></Route>
                

// //             </Routes>
// //             </BrowserRouter>

// //         </div>
// //     )
// // }export default App


import React from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Javascript from "./javascript";
import Python from "./python";
import Java from "./java";
import Cplus from "./Cplus";
import Home from "./home";



function App(){

    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/js' element={<Javascript/>}></Route>
                <Route path='/python' element={<Python/>}></Route>
                <Route path='/java' element={<Java/>}></Route>
                <Route path='/Cplus' element={<Cplus/>}></Route>
            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default App

