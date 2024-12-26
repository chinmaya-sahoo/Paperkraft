import { useState ,React } from 'react'
import Navbar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import InfiniteScroll from './components/Home/InfiniteScroll'
import Sidebar from './components/Sidebar/Sidebar'
import Category from './components/Catagory/Catagory'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Search from './components/Search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Search /> */}
      {/* <Contact /> */}
      {/* <About/> */}
      {/* <Category />*/}
      {/* <Sidebar /> */}
      {/* <Home /> */}
      {/* <InfiniteScroll /> */}
      <div className="flex w-[100vw]  gap-2 bg-slate-500 ">
        <Sidebar/>
        <Home className="w-[100vw-230px]" />
      </div>
    </div>
  )
}

export default App
