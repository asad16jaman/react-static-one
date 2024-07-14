import React from 'react'
import Heighliter from '../component/Heighliter'
import HCard from '../component/HCard'

export default function PageFive() {
  return (
    <div id='FivePage' className='mb'>
        <div className="container ">
        <Heighliter body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla id debitis vitae ea hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum." title="My Inspiration"/>
           <div className="course-container">
                <HCard img="./assets/react.png" title="ReactJS"/>
                <HCard img="./assets/nodejs.png" title="NodeJS"/>
                <HCard img="./assets/mongodb.png" title="MongoDB"/>
                
           </div>
        </div>
    </div>
  )
}
