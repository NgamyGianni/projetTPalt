import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Companypage from './pages/Companypage'
import Homepage from './pages/Homepage'
import Papi from './pages/Papi'

function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/papi" element={<Papi />} />
        <Route path="/film" element={<Companypage />} />
    </Routes>
  )
}

export default Routers