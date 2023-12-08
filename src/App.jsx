import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Journal from './components/Journal'
import {BrowserRouter,Route,Navigate,Routes} from "react-router-dom";
import Studentroom from './components/pages.jsx/Studentroom'
import Root from './components/pages.jsx/Root'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root/>}>
       <Route index  element={<Journal/>}/>
       <Route path="/student/:id" element={<Studentroom/>}/>
       </Route>
    </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
