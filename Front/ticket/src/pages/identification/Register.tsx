import React from 'react'
import { useState } from 'react';
import { useLogin } from '../../contexts/loginContext';
import PopupRegister from '../../components/PopupRegister';


function Register() {
  const [userFirstName,setUserFirstName] = useState("");
  const [userLastName,setUserLastName] = useState("");
  const [userMail,setUserMail] = useState("");
  const [userPassword,setuserPassword] = useState("");
  const [stateRegistration,setStateRegistration]=useState<Boolean>(false)
  //
  const {userConnect,setUserConnect} = useLogin();
  let handleTest =(e)=>{
    e.preventDefault();
    console.log("papa")
    setStateRegistration(true)
    // console.log(userFirstName=="mo" && userLastName=="mo" &&
    //   userMail=="mo@mo" && userPassword=="mo" )
    // console.log("firstname "+userFirstName);
    // console.log("lastname "+userLastName);
    // console.log("mail "+userMail);
    // console.log("password "+userPassword);
    if (userFirstName=="mo" && userLastName=="mo" &&
      userMail=="mo@mo" && userPassword=="mo" 
        ) 
    setStateRegistration(true)
    // console.log("papa")
    // setUserConnect({"isConnected" : true})
    //console.log(userConnect)

  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/init/addUser", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "firstName":userFirstName,
            "lastName":userLastName,
            "mail": userMail,
            "password": userPassword
        })
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setUserFirstName("");
        setUserLastName("")
        setUserMail("");
        setuserPassword("");
        setStateRegistration(true)
        //setUserConnect({"isConnected" : true})
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    
      <div className='identification'>
        <div className='title'>Create an account</div>
        <form  onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName"> FirstName </label>
            <input type="text" onChange={e=>setUserFirstName(e.target.value)} value={userFirstName}/>
          </div>
          <div>
            <label htmlFor="lastName"> LastName </label>
            <input type="text" onChange={e=>setUserLastName(e.target.value)} value={userLastName}/>
          </div>
          <div>
            <label htmlFor="mail"> Mail </label>
            <input type="email" onChange={e=>setUserMail(e.target.value)} value={userMail}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={e=>setuserPassword(e.target.value)} value={userPassword}/>
          </div>
          
          <button type='submit' className='submit-btn'> Submit</button>
        </form>
        {stateRegistration&&<PopupRegister/>}
        {/* <PopupRegister/> */}
      </div>

  )
}

export default Register