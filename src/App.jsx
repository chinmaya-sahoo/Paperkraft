import { useState, React } from 'react'
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
      <div className="flex flex-col md:flex-row w-full min-h-screen gap-2 bg-slate-500">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 lg:w-1/5 bg-gray-700 text-white">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white">
          <Home />
        </div>
      </div>

    </div>
  )
}

export default App
