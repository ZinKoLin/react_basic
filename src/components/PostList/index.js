import React from 'react'
import './index.css'
import style from'./single_post.module.css';

function index({posts}) {
    
    
  return (
    <div className='postList container'>
        {posts.map(post=>(
            <div className={`single-post ${style.card}`} key={post.id}>{post.title}</div>
        ))}
      

    </div>
  )
}

export default index
