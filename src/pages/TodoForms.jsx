// TodoForms.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function TodoForms() {
    const [title, SetTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('description', description);

        try {
            await axios.post('https://todo-server-smxo.onrender.com/api/todos/', formdata, { 
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            // alert('Task added');
            navigate('/list');  //after adding Task redirection is goin to the list page 
            SetTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data!');
        }
    };

    return (
        <div className="form-container sidebar-form">
            <h2>Add New Todo</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => SetTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForms;
