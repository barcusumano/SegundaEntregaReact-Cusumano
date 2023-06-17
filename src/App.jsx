import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//React Router Dom

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//Components
import NavBar from './Components/NavBar/NavBar'


//Pages

import HomePage from "./Pages/HomePage/HomePage"
import Catalog from "./Pages/Catalog/Catalog"
import DetailPage from './Pages/DetailPage/DetailPage';
import Categories from './Pages/Categories/Categories';
import Human from './Pages/Human/Human';
import Alien from './Pages/Alien/Alien';


function App() {

  return (
    <>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/human" element={<Human/>}/>
          <Route path="/alien" element={<Alien/>}/>
          <Route path="/categories/:categoryId" element={<Categories/>}/>
          <Route path="/detailpage/:id" element={<DetailPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
