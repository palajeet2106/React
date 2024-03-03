import './App.css';
import Child from './Components/Child';




function App() {
  // return (
  //   <div className='"App'>
  //     <Child name = "Ajeet"  nameTwo = "kumar"></Child>
     
  //   </div>
  // );

  // const name = 'ajeet';
  // const name = {
  //   a: "vishu",
  //   b : "jyoti"
  // }
   const name = ['ajeet' , 'vikas'];
  return (
  <div>
   <Child xyz = {name}  name2 = 'ajeet'></Child>
  </div>
  )

}

export default App;
