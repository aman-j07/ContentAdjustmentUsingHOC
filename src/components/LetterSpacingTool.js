import React from 'react'

const LetterSpacingTool = (props) => {
  return (
    <div className='tool d-inline-flex flex-column justify-content-evenly me-2'>
       <span className='shorttxt text-center d-flex align-items-center justify-content-center'><i className="bi bi-arrow-left-right me-2 fs-6"></i>Adjust Letter Spacing</span>
       <span className='bg-white rounded-pill min-100 d-flex justify-content-between align-items-center'><button className='btn btn-primary rounded-circle' onClick={()=>{props.changeStyle('decrease','letterSpacing')}} ><i className="bi bi-chevron-down"></i></button> <span className='shorttxt text-primary'>Default</span> <button className='btn btn-primary rounded-circle' onClick={()=>{props.changeStyle('increase','letterSpacing')}}><i className="bi bi-chevron-up"></i></button></span>
    </div>
  )
}

export default LetterSpacingTool