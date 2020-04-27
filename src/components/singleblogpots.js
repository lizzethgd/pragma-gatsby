import React from 'react';
import '../styles/singleblogpost.sass'

//import imagePlaceholder from '../images/img-placeholder.png'



const SingleBlogPost = props => {
  const { blogTitle, blogSubtitle, blogContent} = props
  return (
    <div className='blog_content'>
      <h1>{blogTitle}</h1>
      <h6>{blogSubtitle}</h6>
      <p className='blog_richtextcontent'>{blogContent}</p>
    </div>
  )

}

export default SingleBlogPost
