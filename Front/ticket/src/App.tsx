import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Routers from './Routers'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Routers />
    </div>
  )
}

export default App
