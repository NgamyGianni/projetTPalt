import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Companypage from './pages/Companypage'
import Homepage from './pages/Homepage'
import Identification from './pages/identification/Identification'
function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/film" element={<Companypage />} />
        <Route path="/iden" element={<Identification />} />
    </Routes>
  )
}

export default Routers