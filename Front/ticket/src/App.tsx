import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import Provider from './components/Context'
import { Container } from "@nextui-org/react"
import './App.css'
import Routers from './Routers'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  //const [count, setCount] = useState(0)
  
  return (
    <div>
      <Provider>
        <Header/>
        <Routers />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
