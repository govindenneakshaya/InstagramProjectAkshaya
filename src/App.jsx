import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import HomeFailure from "./Components/HomeFailure";
import HomeLoading from "./Components/HomeLoading";
import SomethingWrongPage from "./Components/SomethingWrongPage";
import PageNotFound from "./Components/PageNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homeFailure" element={<HomeFailure />} />
        <Route path="/homeLoading" element={<HomeLoading />} />
        <Route path="/SomethingWrongPage" element={<SomethingWrongPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="SearchNotFound" element={<SearchNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
