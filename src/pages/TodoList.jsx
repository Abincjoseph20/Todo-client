// TodoList.js
import axios from "axios";
import { useEffect, useState } from "react";
import './style.css';

function TodoList() {
    const [lists, setList] = useState([]);
    const [title, SetTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editId, setEdit] = useState(null);

    const FetchData = async () => {
        try {
            const res = await axios.get('https://todo-server-smxo.onrender.com/api/todos/');
            setList(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        FetchData();
    }, []);

    const HandleDelete = async (id) => {
        try {
            await axios.delete(`https://todo-server-smxo.onrender.com/api/todos/${id}/`);
            FetchData();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const HandleEdit = (todo) => {
        setEdit(todo.id);
        SetTitle(todo.title);
        setDescription(todo.description);
    };

    const HandleUpdate = async () => {
        try {
            const formdata = new FormData();
            formdata.append('title', title);
            formdata.append('description', description);
            
            await axios.patch(`https://todo-server-smxo.onrender.com/api/todos/${editId}/`, formdata, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Updated successfully');
            SetTitle('');
            setDescription('');
            setEdit(null);
            FetchData();
        } catch (error) {
            console.error('Error updating todo:', error);
            alert('Error updating todo!');
        }
    };

    const CancelEdit = () => {
        SetTitle('');
        setDescription('');
        setEdit(null);
    };

    return (
        <div className="list-container">
            <h2>Todo List</h2>
            {lists.map((list) => editId === list.id ? (
                <div key={list.id} className="edit-form">
                    <input 
                        className="edit-input" 
                        type="text" 
                        value={title} 
                        onChange={(e) => SetTitle(e.target.value)} 
                    />
                    <input 
                        className="edit-input" 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    <button onClick={CancelEdit}>Cancel</button>
                    <button onClick={HandleUpdate}>Save</button>
                </div>
            ) : (
                <div className="todo-item" key={list.id}>
                    <h3>{list.title}</h3>
                    <p>{list.description}</p>
                    <div className="todo-actions">
                        <button onClick={() => HandleEdit(list)}>x</button>
                        <button onClick={() => HandleDelete(list.id)}>🖋️</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;