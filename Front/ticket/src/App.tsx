import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Homepage from './pages/Homepage'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/*<Header/> 
      */}
      <Homepage/>
    </div>
  )
}

export default App
