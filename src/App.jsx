import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer'
import About from './pages/About';
import Home from './pages/Home';
import Equity from './pages/Equity';
import Donate from './pages/Donate';
import Support from './pages/Support';
import {BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import Visit from './pages/Visit';


function App() {

  return (
  <>
  <Router>
    <div>
      <Header/>
      <Routes>
        <Route path='/bridgevolt_website' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Donate' element={<Donate/>}/>
        <Route path='/Equity' element={<Equity/>}/>
        <Route path='/Visit' element={<Visit/>}/>
        <Route path='/Support' element={<Support/>}/>
      </Routes> 
      <Footer/>
    </div>
   

  </Router>
  </>
  )
}

export default App
