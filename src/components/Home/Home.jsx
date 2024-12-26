import React from 'react'
import InfiniteScroll from './InfiniteScroll'

function Home() {
  return (
    <div>
      <div className="home w-[80vw] h-[100vh] rounded-sm flex flex-col justify-center items-center bg-gray-700 ">{/*overflow-auto*/}
        <ul>
          <div className="w-[full-8px] mx-2">
              <InfiniteScroll  />
          </div>
          <li className='catagory '>

          </li>
          <li className='contact '>

          </li>
          <li className='footer '>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home