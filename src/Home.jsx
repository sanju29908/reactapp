import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaJava, FaPython, FaJs, FaCuttlefish } from "react-icons/fa"; // ✅ Import icons

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Programming Courses</h1>
      <div className="card-container">
        <div className="card" onClick={() => navigate("/Cplus")}>
          <FaCuttlefish className="icon" />
          <span>C++</span>
        </div>
        <div className="card" onClick={() => navigate("/Java")}>
          <FaJava className="icon" />
          <span>Java</span>
        </div>
        <div className="card" onClick={() => navigate("/Js")}>
          <FaJs className="icon" />
          <span>JavaScript</span>
        </div>
        <div className="card" onClick={() => navigate("/python")}>
          <FaPython className="icon" />
          <span>Python</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
