import React from "react";
import Navbar from "./Navbar";

import SomethingWrong from "../assets/something-went-wrong.png";

const SomethingWrongPage = () => {
  return (
    <div>
      <Navbar />

      <div className="w-[100vw]    bg-white flex items-center justify-center py-6">
        <div className="w-[80vw] h-[80vh]  bg-gray-50 shadow-sm flex flex-col items-center justify-center ">
          <img src={SomethingWrong} className="w-[30%]" />
          <p className="py-6 font-medium ">
            Something went wrong.Please try again
          </p>
         <button class="!bg-sky-500 hover:bg-sky-700 text-amber-50 ">Try Again</button>

        </div>
      </div>
    </div>
  );
};

export default SomethingWrongPage;
