import { useState ,React } from 'react'
import Navbar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import InfiniteScroll from './components/Home/InfiniteScroll'
import Sidebar from './components/Sidebar/Sidebar'
import Category from './components/Catagory/Catagory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Category />      
      {/* <Sidebar /> */}
      {/* <Home /> */}
      {/* <InfiniteScroll /> */}
    </div>
  )
}

export default App
