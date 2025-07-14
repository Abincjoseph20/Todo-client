import React from "react";
import { useState } from "react";
import axios from 'axios'


function TodoForms(){

    const [title,SetTitle]=useState('')
    const [desciption,setDescription] =useState('')

    const handeSubmit = async(e)=>{
        e.preventDefault()

        const formdata = new FormData()
        formdata.append('title',title)
        formdata.append('description',desciption)

        await axios.post('http://127.0.0.1:8000/api/todos/',formdata,{
            headers:{'Content-Type':'multipart/form-data'}
        })

        alert('data saved!')
        SetTitle('')
        setDescription('')
    }
    return(
        <>
        <form onSubmit={handeSubmit}>
            <input type="text" value={title} placeholder="title" onChange={(e)=>SetTitle(e.target.value)} required /> <br />
            <input type="text" value={desciption} placeholder="description" onChange={(e)=>setDescription(e.target.value)} required/>
            <button type="submit">add click</button>
        </form>
        </>
    )
}

export default TodoForms;

