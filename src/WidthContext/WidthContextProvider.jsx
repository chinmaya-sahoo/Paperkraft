import React from 'react'
import WidthContext from './WidthContext';

const WidthContextProvider = ({children}) => {
    const  [isCollapsed, setIsCollapsed] = React.useState(true) ;
  return (
    <WidthContext.Provider value={{isCollapsed , setIsCollapsed}} >
        {children}
    </WidthContext.Provider>
  )
}

export default WidthContextProvider ;