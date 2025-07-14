import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import TodoForms from './pages/TodoForms';
import './App.css'
import Navbar from './componets/Navbar';

function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<TodoForms/>}/>
    </Routes>
  </BrowserRouter>

  )
}

export default App
