import React from 'react'

export default function CardBody({title,body}) {
  return (
    <div className="card-body-container">
                    <h1 className='card-title text-gray'>{title}</h1>
                    <p className='card-body text-light-gray'>{body}</p>
                    <button className='card-btn'>Larn More</button>
    </div>
  )
}
