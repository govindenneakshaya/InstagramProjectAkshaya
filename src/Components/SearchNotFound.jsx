import React from "react";
import wrongsearch from "../assets/wrongsearch.png";
import Navbar from "./Navbar";

const SearchNotFound = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center py-10">
        <img src={wrongsearch} className="w-[30%]"/>
        <p className="py-4 font-bold text-xl ">Search not found</p>
         <p className='text-gray-400 font-serif '>we are sorry, the page you requested could not be found.</p>
        
      </div>
    </div>
  );
};

export default SearchNotFound;
