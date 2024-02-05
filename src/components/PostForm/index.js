import React, { useState } from 'react';
import './index.css';
import { upload } from '@testing-library/user-event/dist/upload';


function Index({addPost}) {

  let [title, setTitle] = useState("");
  
  let resetData = () => {
    setTitle("")
  }

  let uploadPost = (e) => {
    e.preventDefault();

    let post = {
      id: Math.floor(Math.random()*10000),
      title : title
    }

   

    
    addPost(post);
    resetData()
    
  }






  return (
    <>
      <form className='post-form' onSubmit={uploadPost}>
        <h1>Create Post</h1>
        <div className='form-control'>
          <label htmlFor=''>Title</label>
          <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>

          <div className='form-control'>
            <button type='submit'>Create Post</button>

            <p>{title}</p>
          </div>
          
          
        </div>
      </form>
    </>
  )
}

export default Index
