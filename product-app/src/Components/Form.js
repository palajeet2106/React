import React, { useState } from 'react'
import { useRef } from 'react'

const Form = () => {

    // Controlled Component

    // const [firstName , setFirstName] = useState("");
    // const [lastName , setLastName] = useState("");
    // const [password , setPassword] = useState("");

    // const handleChange = (e) => {
    //        e.preventDefault();

    //        if(e.target.name == "fName"){
    //         setFirstName(e.target.value);
    //         // console.log(e.target.value);
    //        }
    //        if(e.target.name == "lName"){
    //         setLastName(e.target.value);
    //         // console.log(e.target.value);
    //        }
    //        if(e.target.name == "password"){
    //         setPassword(e.target.value);
    //         // console.log(e.target.value);
    //        }
    // }
 

    // UnControlled Component

    const nameRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
    }


  return (
    <div>
        {/* <form>
            <div>
            <label>First Name :</label>
                <input type='text' name='fName' value={firstName} onChange={handleChange}></input>
            </div>
            <br />
            <div>
            <label>Last Name :</label>
                 <input type='text' name='lName' value= {lastName} onChange={handleChange}></input>
            </div>
            <br />
            <div>
            <label>Password :</label>
                <input type='password' name='password' value={password} onChange={handleChange}></input>
            </div>
        </form> */}


        <form onSubmit={handleSubmit}>
            <label>First Name :</label>
            <input type='text' name='fName' ref={nameRef} />
            <button>Submit</button>

        </form>  

    </div>
  )
}

export default Form