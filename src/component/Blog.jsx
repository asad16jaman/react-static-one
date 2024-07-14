import React from 'react'

export default function Blog({img,title,body}) {
  return (
    <div className="blog">
                    <img src={img} className='blog-img' alt="" />
                    <h3 className='blog-title'>{title}</h3>
                    <p className='blog-body text-light-gray card-body'>{body}</p>
                    <a href="#" className='blog-link'>Larn More</a>
                </div>
  )
}
