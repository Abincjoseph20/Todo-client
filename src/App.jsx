import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import TodoForms from './pages/TodoForms';
import './App.css'
import Navbar from './componets/Navbar';
import TodoList from './pages/TodoList';

function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<TodoForms/>}/>
      <Route path='list/' element={<TodoList/>} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
