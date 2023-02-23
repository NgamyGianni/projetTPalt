import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Papi from './pages/Papi'
function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/papi" element={<Papi />} />
    </Routes>
  )
}

export default Routers