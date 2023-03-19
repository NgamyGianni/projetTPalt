import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Companypage from './pages/Companypage'
import Homepage from './pages/Homepage'
import Identification from './pages/identification/Identification'
import Register from './pages/identification/Register'
function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cinema/:id" element={<Companypage />} />
        <Route path="/iden" element={<Identification />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Routers