// import React from 'react'
import { useState , React } from 'react';

// const Hooks = () => {

//     let x = 1;

//     function handlePlus(){
//         x = x+1;             
//         console.log("click" , x);
//     }
    
//     // Note = in react we can't change the variable directly in UI thar's why use Hooks useState , useEffect
   
    

//   return (
//     <div>
//         <h1>Counter</h1>
//         <p>Number : {x}</p>
//         <button onClick={handlePlus}>Add</button>
//     </div>
//   )
// }


// useState

// const Hooks = () => {

//     const counterState = useState(1);

//     function handlePlus(){
//              counterState[1] (counterState[0] + 1)     
        
//     }

//   return (
//     <div>
//         <h1>Counter</h1>
//         <p>Number : {counterState[0]}</p>
//         <button onClick={handlePlus}>Add</button>
//     </div>
//   )
// }


// OR

// const Hooks = () => {

//     const [counter , setCounter] = useState(1);
//     const [name , setName] = useState("Counter");

//     // counterState[0] = counter
//     // counterState[1] = setCounter

//     function handlePlus(){
//             setCounter(counter + 1)   
        
//     }
//     function handleMinus(){
//         if(counter > 0){
//             setCounter(counter - 1)  
//         } 
        
//     }
//     function nameChange(){
//             setName("numberChanger")       
//     }
    
//   return (
//     <div>
//         <h1>{name}</h1>
//         <p>Number : {counter}</p>
//         <button  type = "button" onClick={handlePlus}>Add</button>
//         <button  type = "button" onClick={handleMinus}>Minus</button>
//         <button  type = "button" onClick={nameChange}>NameChange</button>
//     </div>
//   )
// }



// const Hooks = () => {
// const val = [1 , 3 , 5 , 7]
//   const [num , setNum] = useState(val);

//   const handlePlus = () =>{
//       setNum([...num , 2 ,4, 6])
//   }

    
//   return (
//     <div>
//     <div style={{display:"flex", justifyContent : "center" ,alignItems : "center", height: "100vh"}}>
//         <p>Number : {num}</p>
//         <button  type = "button" onClick={handlePlus}>Add</button>
//     </div>
   
//     </div>
//   )
// }


// const Hooks = () => {
//    const person = {
//     name : "Ajeet",
//     age : 21
//    }

//   const [data , setData] = useState(person);

//   const handlePlus = () =>{
//       setData({...data , name : "codingOperation" , age : 22})
//   }

    
//   return (
//     <div>
//     <div style={{display:"flex", justifyContent : "center" ,alignItems : "center", height: "100vh"}}>
//         <p>My Name is {data.name} and  My Age is {data.age}</p>
//         <button  type = "button" onClick={handlePlus}>Add</button>
//     </div>
   
//     </div>
//   )
// }


// const Hooks = () => {
  

//   const [data , setData] = useState([
//     {name : "Ajeet" , age : 22},
//     {name : "vikas" , age : 23},
//     {name : "gaurav" , age : 27},
//   ]);

//   const handlePlus = () =>{
//       setData({...data , name : "codingOperation" , age : 22})
//   }

    
//   return (
//     <div>
//     <div style={{display:"flex", justifyContent : "center" ,alignItems : "center", height: "100vh"}}>
//         <p>My Name is {data[2].name} and  My Age is {data[2].age}</p>
//         <button  type = "button" onClick={handlePlus}>Add</button>
//     </div>
   
//     </div>
//   )
// }


const Hooks = () => {
  

  const [data , setData] = useState(false);

  const handlePlus = () =>{
      setData(!data)
  }

    
  return (
    <div>
    <div style={{display:"flex", justifyContent : "center" ,alignItems : "center", height: "100vh"}}>
        <p>
          {
            data ? "ajeet" : "CodingOperation"
          }
        </p>
        <button  type = "button" onClick={handlePlus}>Add</button>
    </div>
   
    </div>
  )
}

export default Hooks