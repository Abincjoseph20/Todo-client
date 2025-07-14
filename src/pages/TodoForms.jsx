// TodoForms.js
import React from "react";
import { useState } from "react";
import axios from 'axios';
import './style.css';


function TodoForms() {
    const [title, SetTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('description', description);

        try {
            await axios.post('http://127.0.0.1:8000/api/todos/', formdata, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Data saved!');
            SetTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data!');
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Todo</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={title} 
                    placeholder="Title" 
                    onChange={(e) => SetTitle(e.target.value)} 
                    required 
                /> 
                <br />
                <input 
                    type="text" 
                    value={description} 
                    placeholder="Description" 
                    onChange={(e) => setDescription(e.target.value)} 
                    required
                />
                <br />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForms;