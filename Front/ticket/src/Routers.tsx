import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Companypage from './pages/Companypage'
import Homepage from './pages/Homepage'
import Identification from './pages/identification/Identification'
import Register from './pages/identification/Register'
import Reservation from './pages/reservation/Reservation'

import { useLogin } from './contexts/loginContext'
import { Navigate } from 'react-router-dom'
import Panier from './pages/Panier'

function Routers() {
  const {userConnect}=useLogin();
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/cinema/:id" 
            element={userConnect.isConnected ? <Companypage/> : <Navigate to="/"/>} /> */}
          <Route path="/cinema/:id" 
            element={<Companypage/>} />
        <Route path="/authentification" 
              element={userConnect.isConnected ?<Navigate to="/"/>:<Identification />} 
                />
        <Route path="/register" 
            element={userConnect.isConnected ?<Navigate to="/"/>:<Register />} />
        <Route path="/reservation" 
            element={userConnect.isConnected ?< Reservation/>:<Navigate to="/"/>} />
    </Routes>
  )
}

export default Routers