import { useState ,React } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import InfiniteScroll from './components/Home/InfiniteScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Home /> */}
      <InfiniteScroll />
    </div>
  )
}

export default App
