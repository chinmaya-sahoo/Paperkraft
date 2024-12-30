import React from 'react'
import InfiniteScroll from './InfiniteScroll'

function Home() {
  return (
    <div>
      <div className="home w-[calc(100vw-260px)] h-[100vh] rounded-sm flex flex-col justify-center items-center bg-gray-700 ">{/*overflow-auto*/}
        <ul >
          <div className="">
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