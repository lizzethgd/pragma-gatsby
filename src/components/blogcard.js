import React from 'react';

//import imagePlaceholder from '../images/img-placeholder.png'
import "../styles/blogcard.sass"


const BlogCard = (props) => {
  const {cardImage, cardTitle, cardDate, cardText} = props
  return (
    <div className="content" key='1'>
      <img 
        src={cardImage}
        className="thumbnail-img"
        alt={cardTitle}
        />
      <div className="post-item">
        <p className="post-title" >{cardTitle}<small> &bull; {cardDate}</small> </p>
         <p className="post-text" >{cardText}</p>
        <button className='post-button'>Keep Reading → </button>
      </div>
    </div>
  )

}

export default BlogCard
