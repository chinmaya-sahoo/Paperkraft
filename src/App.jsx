import { useState, React, useContext } from 'react'
// import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import InfiniteScroll from './components/Home/InfiniteScroll'
import Sidebar from './components/Sidebar/Sidebar'
import Category from './components/Catagory/Catagory'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Search from './components/Search/Search'
import WidthContextProvider from './WidthContext/WidthContextProvider'
// import WidthContext from './WidthContext/WidthContext'
import Render from './Render'

function App() {
  // const { isCollapsed , setIsCollapsed } = useContext(WidthContext) ;

  return (
    <WidthContextProvider>
      <div>
        {/* <Search /> */}
        {/* <Contact /> */}
        {/* <About/> */}
        {/* <Category />*/}
        {/* <Sidebar /> */}
        {/* <Home /> */}
        {/* <InfiniteScroll /> */}
        <Render />
      </div>
    </WidthContextProvider>
  )
}

export default App
