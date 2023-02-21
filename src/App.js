import React from 'react'
import Header from "./components/head/Header"
import "./App.css"
import Home from './routes/Home'
import Resume from './routes/Resume'

import {Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Header/>
  <Home />
  <Resume />  */}

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about" element={<About />} />  */}
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
  

</>


  )
}

export default App
