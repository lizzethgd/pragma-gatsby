import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/layout"

const Contact = props => {
  return ( 
    <Layout  >
      <main>
        <h1>Contact Us</h1>
        <div>
          <p>We value your ideas and help you find a better way to proceed</p>

          <Link to={`/contact/contac_form`}>Contact Form</Link>
          
          <address>
            Pragmatic Inteligent Consulting  <br />
            Finland, Helsinki <br />
            02210 <br />
            +358451000000 <br />
            Finland
          </address>
        </div>
      </main>
    </Layout>
  )
}

Contact.propTypes = {}

export default Contact