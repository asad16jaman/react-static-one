import React from 'react'
import Heighliter from '../component/Heighliter'

export default function ThirdPage() {
  return (
    <div id='ThirdPage' className='mb'>
        <div className="container ">
        <Heighliter body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla id debitis vitae ea hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum." title="My Inspiration"/>
        <div className="img-outer">
            <div className="img-container">
            <img src="./assets/handshake.jpg" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}
