import React, { useState } from 'react'
import './identification.css';
function Identification() {
  
  const [userMail,setUserMail] = useState("");
  const [userPassword,setuserPassword] = useState("")
  return (
    <div className='identification'>
      <div>Indentification</div>
      <form action="">
        <input type="email" onChange={e=>setUserMail(e.target.value)} value={userMail}/>
        <input type="password" onChange={e=>setuserPassword(e.target.value)} value={userPassword}/>
      </form>
      <div>the value is </div>
      <div>{userMail}</div>
    </div>
  )
}

export default Identification