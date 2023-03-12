import React, { useState } from 'react'
import './identification.css';
function Identification() {
  const [userMail,setUserMail] = useState("");
  const [userPassword,setuserPassword] = useState("")

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/init/loginUser", {
        method: "POST",
        body: JSON.stringify({
          "mail": userMail,
          "password": userPassword
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
       body: JSON.stringify({
        "mail": userMail,
        "password": userPassword
      }),
      //   body: JSON.stringify({
      //     "mail": "mo@mo",
      //     "password": "mo"
      // }),

      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
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
      <div className='title'>Authentification</div>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mail"> Mail </label>
          <input type="email" onChange={e=>setUserMail(e.target.value)} value={userMail}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={e=>setuserPassword(e.target.value)} value={userPassword}/>
        </div>
        <button type='submit'> Submit</button>
      </form>
      {/* <div>the value is </div>
      <div>{userMail}</div> */}
    </div>
  )
}

export default Identification