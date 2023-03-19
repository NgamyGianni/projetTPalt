import React from 'react'
import { useState } from 'react';

function Register() {
    const [userFirstName,setUserFirstName] = useState("");
  const [userLastName,setUserLastName] = useState("")
 const [userMail,setUserMail] = useState("");
  const [userPassword,setuserPassword] = useState("")
  
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
      {/* {alert("maman")} */}
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
      {/* <div>the value is </div>
      <div>{userMail}</div> */}
    </div>
  )
}

export default Register