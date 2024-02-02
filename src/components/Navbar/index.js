import React from 'react';
import './index.css';


export default function index({setShowModal}) {
  return (
    <nav>
    <div className='container'>
    <h1>Logo</h1>
    <ul>
      <li>Home</li>
      <li>Posts</li>
      <li >Sign In</li>
      <li><button onClick={()=>setShowModal(true)}>Show</button></li>
    </ul>
    </div>
  </nav>
  )
}

