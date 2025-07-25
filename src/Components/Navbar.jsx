// import React from "react";
import { IoMdLogOut } from "react-icons/io";
import logo from "../assets/login-logo.png";
import { useNavigate } from "react-router-dom";
// import { useTheme } from '../context/ThemeContext';
import toast from "react-hot-toast";
const Navbar = () => {
  // const { darkMode, setDarkMode } = useTheme();

  const navigate = useNavigate();
  function handleLogout() {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/login" );
      (toast.success("✅You are logged out successfully"));
      setTimeout(() => {
      navigate("/login");
    }, 1200); 
    
  }
  }
  return (
    <div className="!w-[100vw] border-b-1">
      <div className="!w-[80vw] mx-auto">
        <div className="flex justify-between bg-white  px-4 ">
          <div className="flex  items-center justify-center px-5">
            <img src={logo} alt="login-logo" />
            <p className="font-bold px-5 ">Insta Share</p>
          </div>
          <div className="hidden md:block">
            <div className=" p-2.5  flex items-center justify-center gap-8">
              <input
                type="text"
                placeholder="Scearch Caption"
                className="bg-gray-300 rounded-sm p-3"
              ></input>
              <p className="font-medium ml-2.5 cursor-pointer text-[#4094EF] ">
                Home
              </p>
              <p className="font-medium ml-2.5 cursor-pointer ">profile</p>

              <button
                className="text-white font-medium ml-2.5 flex items-center !bg-[#4094EF] justify-center cursor-pointer "
                onClick={handleLogout}
              >
                <IoMdLogOut className="mr-1" />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
