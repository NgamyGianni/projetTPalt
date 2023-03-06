import React, { useState } from 'react'
import './identification.css';
function Identification() {
  
  const [userMail,setUserMail] = useState("");
  const [userPassword,setuserPassword] = useState("")
  return (
    <div className='identification'>
      <div className='title'>Authentification</div>
      <form action="" method='post'>
        <div>
          <label htmlFor="mail"> Mail </label>
          <input type="email" onChange={e=>setUserMail(e.target.value)} value={userMail}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={e=>setuserPassword(e.target.value)} value={userPassword}/>
        </div>
        <input type="submit" value="submit" className='sumbit'/>
      </form>
      {/* <div>the value is </div>
      <div>{userMail}</div> */}
    </div>
  )
}

export default Identification