import { useState ,React } from 'react'
import Navbar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import InfiniteScroll from './components/Home/InfiniteScroll'
import Sidebar from './components/Sidebar/Sidebar'
import Category from './components/Catagory/Catagory'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Contact />
      {/* <About/> */}
      {/* <Category />*/}
      {/* <Sidebar /> */}
      {/* <Home /> */}
      {/* <InfiniteScroll /> */}
    </div>
  )
}

export default App
