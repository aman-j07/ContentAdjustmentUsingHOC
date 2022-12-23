import React from 'react'

const FontSizingTool = (props) => {
  return (
    <div className='tool d-inline-flex flex-column justify-content-evenly me-2'>
        <span className='shorttxt text-center d-flex align-items-center justify-content-center'><i className="bi bi-fonts fs-5"></i>Adjust Font Sizing</span>
        <span className='bg-white rounded-pill min-100 d-flex justify-content-between align-items-center'><button onClick={()=>{props.changeStyle('decrease','fontSize')}} className='btn btn-primary rounded-circle'><i className="bi bi-chevron-down"></i></button> <span className='shorttxt text-primary'>Default</span> <button onClick={()=>{props.changeStyle('increase','fontSize')}} className='btn btn-primary rounded-circle'><i className="bi bi-chevron-up"></i></button></span>
    </div>
  )
}

export default FontSizingTool