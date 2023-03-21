import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Companypage from './pages/Companypage'
import Homepage from './pages/Homepage'
import Identification from './pages/identification/Identification'
import Register from './pages/identification/Register'
import Panier from './pages/Panier'
import { useGlobal } from './components/Context'
import { Navigate } from 'react-router-dom'
function Routers() {
  const {userConnect}=useGlobal();
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/cinema/:id" element={<Companypage />} />
        <Route path="/authentification" 
              element={userConnect.isConnected ?<Navigate to="/"/>:<Identification />} 
                />
        <Route path="/register" 
            element={userConnect.isConnected ?<Navigate to="/"/>:<Register />} />
        <Route path="/panier" 
            element={<Panier />} />
    </Routes>
  )
}

export default Routers