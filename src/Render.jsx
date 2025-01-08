import { useState, React, useContext } from 'react'
// import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import InfiniteScroll from './components/Home/InfiniteScroll'
import Sidebar from './components/Sidebar/Sidebar'
import Category from './components/Category/Category'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Search from './components/Search/Search'
// import WidthContextProvider from './WidthContext/WidthContextProvider'
import WidthContext from './WidthContext/WidthContext'

function Render() {
//   const { isCollapsed , setIsCollapsed } = useContext(WidthContext) ;
//   console.log(isCollapsed) ;

  return (
    
      <div>
        {/* <Search /> */}
        {/* <Contact /> */}
        {/* <About/> */}
        {/* <Category />*/}
        {/* <Sidebar /> */}
        {/* <Home /> */}
        {/* <InfiniteScroll /> */}
        <div className="flex w-[100vw] gap-1 bg-slate-500 ">
          <Sidebar />
          {/* <Home className="w-[100vw-252px]" /> */}
          <div className={` bg-blue-500 w-[calc(100vw-84px)] h-screen rounded-sm` }>
          {/* <div className={` bg-blue-500 ${ isCollapsed ? "w-[calc(100vw-84px)]" : "w-[calc(100vw-84px)]"  }  h-screen rounded-sm` }> */}
            {/* <Home /> */}
            <Category />
          </div>
        </div>
      </div>
    
  )
}

export default Render
