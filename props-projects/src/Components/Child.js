import React from 'react'

const Child = (props) => {
    // console.log(props);
  return (
    
    <div>
        {/* <h1>Hello {props.name}</h1>
        <h1>Hello {props.nameTwo}</h1> */}
        <h1>Hello {props.xyz.a}</h1>
        <h1>Hello {props.xyz[1]}</h1>
        <h1>Hello {props.name2}</h1>
    </div>
  )

}

export default Child;