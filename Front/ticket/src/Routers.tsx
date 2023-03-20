import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Companypage from './pages/Companypage'
import Homepage from './pages/Homepage'
import Identification from './pages/identification/Identification'
import Register from './pages/identification/Register'
import { useLogin } from './components/LoginContext'
import { Navigate } from 'react-router-dom'
function Routers() {
  const {userConnect}=useLogin();
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
<<<<<<< HEAD
        <Route path="/cinema/:id" element={<Companypage />} />
        <Route path="/iden" element={<Identification />} />
        <Route path="/register" element={<Register />} />
=======
        
        <Route path="/cinema/:id" element={<Companypage />} />
        <Route path="/authentification" 
              element={userConnect.isConnected ?<Navigate to="/"/>:<Identification />} 
                />
        <Route path="/register" 
            element={userConnect.isConnected ?<Navigate to="/"/>:<Register />} />
>>>>>>> homepage
    </Routes>
  )
}

export default Routers