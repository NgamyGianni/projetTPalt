import { useState } from 'react'
import Header from './components/Header'
import { Container } from "@nextui-org/react"
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Header/>
    </Container>
  )
}

export default App
