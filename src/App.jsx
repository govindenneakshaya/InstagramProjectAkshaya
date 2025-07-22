import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import HomeFailure from "./Components/HomeFailure";
import HomeLoading from "./Components/HomeLoading";
import SomethingWrongPage from "./Components/SomethingWrongPage";
import PageNotFound from "./Components/PageNotFound";
import SearchNotFound from "./Components/SearchNotFound";
import OnlyLoading from "./Components/OnlyLoading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { useLocation } from "react-router-dom";


function App() {
   const location = useLocation();

  console.log("Full URL path:", location.pathname);


  return (

    <>
      <Toaster position="top-center" reverseOrder={false} />
      
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/homeFailure" element={<ProtectedRoutes><HomeFailure /></ProtectedRoutes>} />
          <Route path="/homeLoading" element={<ProtectedRoutes><HomeLoading /></ProtectedRoutes>} />
          <Route path="/SomethingWrongPage" element={<ProtectedRoutes><SomethingWrongPage /></ProtectedRoutes>} />
          <Route path="*" element={<ProtectedRoutes><PageNotFound /></ProtectedRoutes>} />
          <Route path="/SearchNotFound" element={<ProtectedRoutes><SearchNotFound /></ProtectedRoutes>} />
          <Route path="/OnlyLoading" element={<ProtectedRoutes><OnlyLoading /></ProtectedRoutes>} />
        </Routes>
    
    </>
  );
}

export default App;
