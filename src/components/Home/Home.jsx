import React from 'react'
import InfiniteScroll from './InfiniteScroll'

function Home() {
  return (
    <div>
      <div className="home w-[80vw] h-[100vh] rounded-md flex flex-col justify-center items-center bg-black ">{/*overflow-auto*/}
        <ul>
          <div className=" flex justify-center items-center bg-gray-100">
            <div className="container flex justify-center items-center">
              <InfiniteScroll />
            </div>
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