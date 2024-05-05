  // const heading = React.createElement("h1" , {id:"heading" , class:"head"} , "Hello Coders");
  const heading = React.createElement("div" , {id:"parent"} ,
  [
  React.createElement("div" , {id:"child"} ,React.createElement("h1" , {id:"heading"} , "Hello Coders")),
  React.createElement("div" , {id:"child"} ,React.createElement("h1" , {id:"heading"} , "Hello Worlds"))
  ]
   
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);