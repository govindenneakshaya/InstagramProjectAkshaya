import React from 'react'
import Navbar from "./Navbar";

const OnlyLoading = () => {
  return (
    <div>
       <Navbar />
       <div className='h-screen flex items-center justify-center'>
       <div className="h-[30px] w-[30px] border-l-[4px] border-b-blue-400 border-solid rounded-full  animate-spin">
              
            </div>
            </div>

    </div>
  )
}

export default OnlyLoading
