import React, { useState } from 'react'
import './identification.css';
import { useLogin } from '../../contexts/loginContext';
function Identification() {
  const [userMail,setUserMail] = useState("");
  const [userPassword,setuserPassword] = useState("");
  const {userConnect, setUserConnect} = useLogin();
  let handleTest =()=>{
    if (userMail=="mo@mo" && userPassword=="mo") setUserConnect({"isConnected" : true})
    console.log(userConnect)
  }
  const boundaryBox={height:"170px"}
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/init/loginUser", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "mail": userMail,
          "password": userPassword
        })
      });
      let resJson:string = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setUserMail("");
        setuserPassword("");
        setUserConnect({"isConnected" : true, "userId":parseInt(resJson)})
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div  className='identification' style={boundaryBox}>
      <div className='title'>Authentification</div>
      <form  onSubmit={handleSubmit} >
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

export default Identification