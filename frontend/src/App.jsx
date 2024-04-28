import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./componets/Home"
import About from "./componets/About"
import Create from "./componets/Create"

function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default App
