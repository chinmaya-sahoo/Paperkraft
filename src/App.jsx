import { useState ,React } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar /> */}
      <Home />
    </div>
  )
}

export default App
