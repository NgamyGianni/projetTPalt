import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import LoginProvider from './components/LoginContext'
import { Container } from "@nextui-org/react"
import './App.css'
import Routers from './Routers'
import { Route, Routes } from 'react-router-dom'
import PanierProvider from './components/PanierContext'

const App = () => {
  //const [count, setCount] = useState(0)
  
  return (
    <div>
      <LoginProvider>
        <PanierProvider>
          <Header/>
          <Routers />
          <Footer />
        </PanierProvider>
      </LoginProvider>
    </div>
  )
}

export default App
