import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

const Footer = props => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        author
      }
    }
  }`)
  return (
    <footer>
      <div >
        <small>
        <b>Pragmatic Inteligent Consulting App © {new Date().getFullYear()} , Created by {data.site.siteMetadata.author}</b>
        </small>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer