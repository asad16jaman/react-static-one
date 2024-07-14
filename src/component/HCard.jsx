import React from 'react'

export default function HCard({img,title}) {
  return (
    <div className="h-card">
                    <div className="h-card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className='h-card-body'>
                        <h3 className='h-card-title text-black'>{title}</h3>
                        <p className='text-light-gray card-body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti, eaque natus mollitia dignissimos expedita quidem vero magni cupiditate</p>
                        <a href="" className='blog-link'>Learn More</a>
                    </div>
                </div>
  )
}
