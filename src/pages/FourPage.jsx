import React from 'react'
import Heighliter from '../component/Heighliter'
import Blog from '../component/Blog'

export default function FourPage() {
  return (
    <div id='FourPage' className='mb'>
        <div className="container ">
        <Heighliter body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla id debitis vitae ea hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum." title="My Inspiration"/>
            <div className="blog-container">
                <Blog img="./assets/html.png" title="HTML" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, pariatur." />
                <Blog img="./assets/css.png" title="HTML" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, pariatur." />
                <Blog img="./assets/js.png" title="HTML" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, pariatur." />
                
            </div>
        </div>
    </div>
  )
}
