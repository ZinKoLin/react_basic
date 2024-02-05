import React from 'react'
import './model.css'
import  ReactDom  from 'react-dom'


function index({children,showModal, danger=true}) {
  
  let className = danger ? 'border-red' : "border-blue";
  return (
    
    ReactDom.createPortal(
        <div className={`model-box ${className}`} >
    {children}
    
   
</div>, document.getElementById('modal')
    )

  )
}

export default index
