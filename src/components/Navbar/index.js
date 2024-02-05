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
      <li >Categories</li>
      <li><button onClick={()=>setShowModal(true)}>Sign In</button></li>
    </ul>
    </div>
  </nav>
  )
}

