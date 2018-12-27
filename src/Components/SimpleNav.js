import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import giphy_logo from '../Images/giphy_logo.png'

export default class SimpleNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = ()=> this.setState({ isOpen: !this.state.isOpen });

  render(){
    return(
      <div>
        <Navbar color="transparent" light expand="lg">
          <NavLink to="/"><img src={giphy_logo} className="nav-img" alt="giphy logo" /></NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavLink to="/"><span className="nav-span">HOME</span></NavLink>
                <NavLink to="/upload"><span className="nav-span">UPLOAD</span></NavLink>
                <NavLink to="/favorites"><span className="nav-span">FAVORITES</span></NavLink>
                <NavLink to="/random"><span className="nav-span">RANDOM</span></NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
