import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

const Navbar = props => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }`)
  return (

    <nav className="navbar navbar-light bg-light">
   <span className='navbar-brand' href='#'>{data.site.siteMetadata.title}</span>   
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <Link className='nav-link active' to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/about'>About Us</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/blogpage'>News & Publications</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/portfolio'>Portfolio</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/codeofconduct'>Code of Conduct</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar