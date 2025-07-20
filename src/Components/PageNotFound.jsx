import React from 'react'
import error1 from "../assets/erroring 1.png";

const PageNotFound = () => {
  return (
    <div>
          <div className="w-[100vw]  h-[100vh]   bg-white flex items-center justify-center py-6">
        <div className="w-[80vw] px-3.5 py-4  bg-gray-50 shadow-sm flex flex-col items-center justify-center ">
          <img src={error1} />
          <p className="py-6 font-bold text-xl ">
            Page not found
          </p>
          <p className='text-red-500 font-serif '>we are sorry, the page you requested could not be found.</p>
            <p className='text-red-500 pb-6 font-serif '>Please go back to the homepage.</p>
         <button class="!bg-sky-500 hover:bg-sky-700 text-amber-50 ">Try Again</button>

        </div>
      </div>
    </div>
  )
}

export default PageNotFound
