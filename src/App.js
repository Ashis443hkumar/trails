import React from "react";
import "./style.css";
import Header from "./components/common/header/Header"
import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"


export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes> 
    </div>
  );
}
