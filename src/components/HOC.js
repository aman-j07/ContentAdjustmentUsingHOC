import React from 'react'

const HOC = (Component,name,icon,changeStyle,changeStyles,isMagnify) => {
    const EnhancedComponent = () => {
      return (
        <div className="d-inline-flex flex-wrap flex-sm-nowrap flex-md-nowrap flex-lg-nowrap">
          <Component changeStyle={changeStyle}/>
          <div onClick={changeStyles} className={`tool tool--mini d-flex flex-column justify-content-evenly align-items-center mb-2 ${(isMagnify)?'active':''}`}>
            {icon}
            <span className="shorttxt">{name}</span>
          </div>
        </div>
      );
    };
    return EnhancedComponent;
  };

  export default HOC