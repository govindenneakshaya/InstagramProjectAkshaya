import React, { useState } from "react";
import loginBanner from "../assets/login-page-banner.png";
import logoLogin from "../assets/login-logo.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [result, setResult] = useState([]);
  // const token = localStorage("jwt_token" , token)
  const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  async function fetchApiData() {
    try {
      const response = await fetch("https://apis.ccbp.in/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        toast.error(errData.error_msg || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token",JSON.stringify(data.jwt_token));
      toast.success("Login successful! 🎉");
      console.log("Login Success:", data);
      if(data){
        navigate("/");
      }
      // You can store JWT or navigate to home page here
    } catch (err) {
      console.log(err);
    }
  }
   // Handle Enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchApiData();
    }
  };
  return (
    <div onKeyDown={handleKeyDown}>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="h-[64px] w-full ml-[10%] px-5  mt-4 ">
              <p className="text-black font-medium mb-2 ">Password</p>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="bg-gray-200 text-black rounded-md p-2 w-[80%]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center w-full">
              <button
                className="mt-[48px] w-[78%] !bg-blue-400 "
                onClick={fetchApiData}

              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
