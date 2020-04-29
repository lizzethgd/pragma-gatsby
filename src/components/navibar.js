import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import logo from '../images/logo.gif'
import '../styles/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import '../styles/navibar.sass'



const Navibar = props => {
 
    return (
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home">
  <img
        src={logo}
        width="130"
        height="30"
        className="d-inline-block align-top"
        alt="pragmatic logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Link className='link_active' to='/'>Home</Link>
  <Link className='link_active' to='/about'>About Us</Link> 
  <Link className='link_active' to='/blogpage'>News & Publications</Link>
  <Link className='link_active' to='/portfolio'>Portfolio</Link> 
  <Link className='link_active' to='/codeofconduct'>Code of Conduct</Link> 
  <Link className='link_active' to='/contact'>Contact us</Link> 
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navibar