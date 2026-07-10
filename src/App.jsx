import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Components/Faction Page/Landing';
import Display from './Components/FactionDisplay Page/Display';
import Character from './Components/Character Page/Character';
import './App.css'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/faction/:id" element={<Display />} />
      <Route path='/character/:id' element={<Character />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
