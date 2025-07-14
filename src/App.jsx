// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import TodoForms from './pages/TodoForms';
import TodoList from './pages/TodoList';

function App() {
    return (
        <Router>
            <div className="app">
              <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<TodoForms/>} />
                        <Route path="/list" element={<TodoList/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;