import React from "react";
import Navbar from "./Navbar";
import Profiles from "./Profiles";
import triangle from "../assets/alert-triangle.png";

const HomeFailure = () => {
  return (
    <div>
      <Navbar />
      <Profiles />
      <div className="w-[100vw]    bg-white flex items-center justify-center py-6">
        <div className="w-[80vw] h-[80vh] border-1 bg-gray-100 shadow-sm flex flex-col items-center justify-center ">
          <img src={triangle} />
          <p className="py-2 font-medium ">
            Something went wrong.Please try again
          </p>
          <button className=" text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeFailure;
