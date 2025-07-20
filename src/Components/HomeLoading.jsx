import React from "react";
import Navbar from "./Navbar";

const HomeLoading = () => {
  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center py-10">
        <div className="h-[30px] w-[30px] border-l-[4px] border-b-blue-400 border-solid rounded-full animate-spin">
          .
        </div>
      </div>

      <div className="w-[100vw]    bg-white flex items-center justify-center py-6">
        <div className="w-[80vw] h-[80vh] border-1 bg-gray-100 shadow-sm flex flex-col items-center justify-center ">
          <div className="flex items-center justify-center py-10">
            <div className="h-[30px] w-[30px] border-l-[4px] border-b-blue-400 border-solid rounded-full animate-spin">
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoading;
