import React from 'react'
import "../styles/contactcard.sass"

const ContactCard =() => {
    return(
    <div className='div_contactcard'>
       <h5>Email</h5>
       <p>info@pragmatic</p> 
       <h5>Telephone</h5>
       <p>+358 44 911 911</p>  
       <h5>Address</h5>
       <p>Havukoskenkatu 1
           <br /> 
        01360 Vantaa </p>
        <br /> 
        <br /> 
       <div className='spans'><span className='single_span'></span>  <span className='single_span'></span>  <span className='single_span'></span></div>
    </div>
    )
}

export default ContactCard
