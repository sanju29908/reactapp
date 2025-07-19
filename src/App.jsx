// // // import React from "react";
// // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // import Signup from "./signup"; 
// // // import Login from "./login";

// // // function App() {
// // //   return (
// // //     <div>
// // //       <BrowserRouter>
// // //         <Routes>
// // //           <Route path="/" element = {<Login/>}></Route>
// // //           <Route path="/signup" element={<Signup />}></Route>
// // //         </Routes>
// // //       </BrowserRouter>
// // //     </div>
// // //   );
// // // }


// // // export default App;

// // import React,{Component} from "react";

// // class App extends Component {
// //   render(){
// //     return(
// //       <div>
// //         <h1>i am the class Components</h1>
// //       </div>
// //     )
// //   }
// // }export default App

// import React from "react";

// function App (){
//   var admin = true
//   var content;
//   if(admin){
//     content ="i am admin"
//   }else{
//     content ="i am user"
//   }
//   return(
//     <div>
//       <h1>{content}</h1>

//     </div>
//   )
// }export default App

// import React from "react";

// function App(){
//   var admin = true
//   return(
//     <div>
//       <h1>{admin? "i am the admin": "i am the user"} </h1>

//     </div>
//   )
// }export default App

// import React from "react";
// import Login from "./login";
// import Signup from "./signup";

// function App(){
//   var admin = false
//   var content;
//   if(admin){
//     content=<Login/>
//   }else{
//     content=<Signup/>
//   }

//   return(
//     <div>
//       <h1>{content}</h1>

//     </div>
//   )
// }export default App

// import React from "react";
// import Login from "./login";
// import Signup from "./signup";

// function App(){
//   var admin = true
//   return(
//     <div>
//       <h1>{admin? <Login/>:<Signup/>}</h1>

//     </div>
//   )
// }export default App

// import React from "react";

// function App(){
//     var sanju = false
//     var con
//     return(
//         <div>
//             <h1>{sanju?"i am the idiot":"i am the not idiot"}</h1>

//         </div>
//     )
// }export default App

// import React from "react";

// function App(){
//     var kishore=false
//     var content;
//     if(true){
//         content="kisore is cunning"
//     }else{
//         content="kishore is not cunning"
//     }
//     return(
//         <div>
//             <h1>{content}</h1>

//         </div>
//     )
// }export default App

// import React, { useState } from "react";

// function App(){
//     var [Count,setCount]=useState(0)
//     console.log(Count);

//     function handleUpdate(){
//         setCount(Count+1)
//     }

//     function handleDec(){
//         setCount(Count-1)
//     }

//     function reset(){
//         setCount(0)
//     }
    
//     return(
//         <div>
//             <h1>{Count}</h1>
//             <button onClick={handleUpdate}>increment</button>
//             <button onClick={handleDec}>decrement</button>
//             <button onClick={reset}>reset</button>

//         </div>
//     )
// }export default App
