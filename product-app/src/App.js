
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import gift from "./Assets/img.png"
import gift1 from "./Assets/gift2.avif"
import gift2 from "./Assets/gift1.jpg"
import Hero from "./Components/Hero"
// import Hooks from './Components/Hooks';
import UseRefHooks from './Components/UseRefHooks';
import Form from './Components/Form';





function App() {
  // const data = [
  //   {
  //     title : "Gift 1",
  //     price : 199,
  //     img : gift
  //   },
  //   {
  //     title : "Gift 1",
  //     price : 199,
  //     img : gift1
  //   },
  //   {
  //     title : "Gift 1",
  //     price : 199,
  //     img : gift2
  //   },
  // ]
    
  return (
   
      <>
      {/* <Header></Header> */}
      <div style={{display : "flex", justifyContent : "space-around", alignItems : "center"} }>
      {/* <Hero title = {data[0].title} img = {data[0].img} price = {data[0].price} ></Hero>
      <Hero title = {data[1].title} img = {data[1].img} price = {data[1].price}></Hero>
      <Hero title = {data[2].title} img = {data[2].img} price = {data[2].price}></Hero> */}
      
      {/* {
        data.map( (element) => {
          return ( 
           <Hero 
           title = {element.title}
           price = {element.price}
           img = {element.img}
            />
          )

        })
      } */}


      </div>
      {/* <Hooks></Hooks> */}
      {/* <Footer></Footer> */}
      {/* <UseRefHooks></UseRefHooks> */}
      <Form></Form>
   </>
  
  );

  

}

export default App;
