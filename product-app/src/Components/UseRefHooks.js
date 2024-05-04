import React, { useEffect, useRef, useState } from 'react'

const useRefHooks = () => {
   const [counter , setCounter] = useState(0);
   const count = useRef(0);

//    let nameRef = useRef();
//    useEffect ( () => {
//     console.log(nameRef.current.innerHTML = "Hello");
//     console.log(nameRef.current.style.color = "yellow");
//     console.log(nameRef.current.style.backgroundColor  = "blue");
//    } ,[])

const handleClick = () => {
    setCounter(counter + 1)
}

//    useEffect( () => {
//     setCounter(counter + 1)
//    } , [])


   useEffect( () => {
   count.current = count.current + 1
   } , [counter])


   

  return (
    <div>
       {/* <p ref = {nameRef}></p> */}
       <p>counterRef : {count.current}</p>
       {/* <p>counterState : {counter}</p> */}
       <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default useRefHooks