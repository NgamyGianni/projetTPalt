import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Identification from './pages/identification/Identification'
function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/iden" element={<Identification />} />
    </Routes>
  )
}

export default Routers