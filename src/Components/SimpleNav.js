import React from 'react';
import giphy_logo from '../giphy_logo.png'

const SimpleNav = (props)=>{
  return(
    <div className="nav-div">
        <a href="/"><img src={giphy_logo} className="nav-img" alt="giphy logo" /></a>
        <a href="/"><span className="nav-span">HOME</span></a>
        <a href="/upload"><span className="nav-span">UPLOAD</span></a>
        <a href="/favorites"><span className="nav-span">FAVORITES</span></a>
        <a href="/random"><span className="nav-span">RANDOM</span></a>
    </div>
  )
}
export default SimpleNav;
