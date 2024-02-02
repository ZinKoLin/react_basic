import React from 'react'
import './model.css'
import  ReactDom  from 'react-dom'

function index({showModal, danger=true}) {
  
  let className = danger ? 'border-red' : "border-blue";
  return (
    
    ReactDom.createPortal(
        <div class="model-box" >
    <div  className={`cookiesContent ${className}`} id="cookiesPopup">
    <button class="close" onClick={()=>showModal(false)}>✖</button>
    <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
    <p>We use cookies for improving user experience, analytics and marketing.</p>
    <button class="accept">That's fine!</button>
  </div>
</div>, document.getElementById('modal')
    )

  )
}

export default index
