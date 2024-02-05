import React, { useState } from 'react';
import './index.css';
import { upload } from '@testing-library/user-event/dist/upload';


function Index({addPost}) {

  let [title, setTitle] = useState("");

  let [status, setStatus] = useState("upcoming");
  
  let resetData = () => {
    setTitle("")
  }

  let uploadPost = (e) => {
    e.preventDefault();

    let post = {
      id: Math.floor(Math.random()*10000),
      title : title,
      status : status
    }

   

    
    addPost(post);
    resetData()
    
  }






  return (
    <>
      <form className='post-form' onSubmit={uploadPost}>
        <h1>Create Post {status}</h1>
        <div className='form-control'>
          <label htmlFor=''>Title</label>
          <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>

          <div className='form-control'>
            <button type='submit'>Create Post</button>

            <p>{title}</p>
          </div>

          <div className='form-control'>
            <label htmlFor=''>Status</label>
            <select name='' id='' value={status} onChange={(e)=>setStatus(e.target.value)}>
              <option value='dropped'>Dropped</option>
              <option value='ongoing'>Ongoing</option>
              <option value='upcoming'>UpComing</option>
            </select>
          </div>
          
          
        </div>
      </form>
    </>
  )
}

export default Index
