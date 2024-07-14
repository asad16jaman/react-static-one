import React from 'react'
import Nav from '../component/Nav'

export default function FirstPage() {
  return (
    <div className='firstPage mb'>
        <Nav />
        <div className="imgBg">
            <div className='container'>
              <img src="./assets/Group.png" alt="" />
              <h1 className='text-black header-title'>"In the near future, I hope to
              become a Developer."</h1>
              <p className='text-light-gray header-des'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat suscipit sapiente tempore? Numquam ex, omnis assumenda laudantium odit, fugit labore ipsam corporis sequi, accusantium error!</p>
              <button className='btn bg-black'>Contact With Me</button>
            </div>
        </div>
    </div>
  )
}
