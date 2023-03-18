import "./App.css";
import Register from "../src/Components/Register/Register.js";
import Login from "../src/Components/Login/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar.js";
import ComplaintFile from "./Components/ComplaintFile/ComplaintFile.js";
import Prediction from "./Components/Prediction/Prediction.js";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/complaintfile" element={<ComplaintFile />} />
          <Route path="/prediction" element={<Prediction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
