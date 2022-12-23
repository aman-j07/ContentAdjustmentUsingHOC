 import React from 'react'
 
 const ContentScalingTool = (props) => {
   return (
    <div className='tool d-inline-flex flex-column justify-content-evenly me-2 m'>
        <span className='shorttxt text-center d-flex justify-content-center align-items-center'><i className="bi bi-arrows-fullscreen me-2"></i>Content Scaling</span>
        <span className='bg-white rounded-pill min-100 d-flex justify-content-between align-items-center'><button className='btn btn-primary rounded-circle' onClick={()=>{props.changeStyle('decrease','zoom')}}><i className="bi bi-chevron-down"></i></button> <span className='shorttxt text-primary'>Default</span> <button className='btn btn-primary rounded-circle' onClick={()=>{props.changeStyle('increase','zoom')}}><i className="bi bi-chevron-up"></i></button></span>
    </div>
   )
 }
 
 export default ContentScalingTool