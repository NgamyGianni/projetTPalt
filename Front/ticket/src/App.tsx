import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import { Container } from "@nextui-org/react"
import './App.css'
import Routers from './Routers'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Routers />
      <Footer />
    </div>
  )
}

export default App
