import React from "react";

const HiglightTool = (props) => {
  
  return (
    <>
      <div className="tool tool--mini d-flex flex-column justify-content-evenly align-items-center me-2 mb-2" onClick={(e)=>props.changeStyle('highlight','title',e)}>
        <i className="bi bi-file-text fs-5"></i>
        <span className="shorttxt">Highlight Titles</span>
      </div>
      <div className="tool tool--mini d-flex flex-column justify-content-evenly align-items-center me-2 mb-2" onClick={(e)=>props.changeStyle('highlight','link',e)}>
        <i className="bi bi-file-text fs-5"></i>
        <span className="shorttxt">Highlight Links</span>
      </div>
    </>
  );
};

export default HiglightTool;
