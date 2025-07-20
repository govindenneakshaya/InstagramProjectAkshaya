import React from "react";
import loginBanner from "../assets/login-page-banner.png";
import logoLogin from "../assets/login-logo.png";

function Login() {
  return (
    <div>
      <div className="totalCard flex items-center  w-full justify-center h-[100vh] !gap-12">
        <div>
          <img
            src={loginBanner}
            className="w-full  mx-auto hidden md:block"
            alt="login banner"
          />
        </div>

        <div>
          <div className="card shadow-xl">
            
            <img src={logoLogin} className="logologin mx-auto " />
            <strong>
              <p className="instashare text-center ">Insta Share</p>
            </strong>
             <div className="h-[64px] w-full ml-[10%] px-5 mt-2 mb-2">
             <p className="text-black mt-6 font-medium mb-2">User Name</p>
             <input
              type="text"
              placeholder="search user"
              className="bg-gray-200 text-black rounded-md p-2 w-[80%] "
            />
            </div>
            <div className="h-[64px] w-full ml-[10%] px-5  mt-4 ">
            <p className="text-black font-medium mb-2 ">Password</p>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="bg-gray-200 text-black rounded-md p-2 w-[80%]"
            />
            </div>
            <div className="text-center w-full">
            <button className="mt-[48px] w-[78%] !bg-blue-400 ">Login</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
