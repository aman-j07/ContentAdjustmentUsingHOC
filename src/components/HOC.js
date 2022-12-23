import React from 'react'

const HOC = (Component,name,icon,changeStyle) => {
    const EnhancedComponent = () => {
      return (
        <div className="d-inline-flex mb-2">
          <Component changeStyle={changeStyle}/>
          <div className="tool tool--mini d-flex flex-column justify-content-evenly align-items-center">
            {icon}
            <span className="shorttxt">{name}</span>
          </div>
        </div>
      );
    };
    return EnhancedComponent;
  };

  export default HOC