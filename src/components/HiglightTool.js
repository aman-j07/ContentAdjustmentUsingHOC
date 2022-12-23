import React from "react";

const HiglightTool = () => {
  return (
    <>
      <div className="tool tool--mini d-flex flex-column justify-content-evenly align-items-center me-2">
        <i className="bi bi-file-text fs-5"></i>
        <span className="shorttxt">Highlight Titles</span>
      </div>
      <div className="tool tool--mini d-flex flex-column justify-content-evenly align-items-center me-2">
        <i className="bi bi-file-text fs-5"></i>
        <span className="shorttxt">Highlight Links</span>
      </div>
    </>
  );
};

export default HiglightTool;
