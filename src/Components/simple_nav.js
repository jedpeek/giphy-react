import React, {Component} from 'react';


const SimpleNav = (props)=>{
  return(
    <div className="nav-div">
        <a href="/"><span className="nav-span">HOME</span></a>
        <a href="/upload"><span className="nav-span">UPLOAD</span></a>
        <a href="/favorites"><span className="nav-span">FAVORITES</span></a>
        <a href="/random"><span className="nav-span">RANDOM</span></a>
    </div>
  )
}
export default SimpleNav;
