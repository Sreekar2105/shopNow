import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import React from 'react'
import Navigationbar from "./Navigationbar";

function Shopnow() {
  return (
       <>
        <Navigationbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        </>
  )
}

export default Shopnow;