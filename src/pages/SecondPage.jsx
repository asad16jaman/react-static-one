import React from 'react'
import Heighliter from '../component/Heighliter'
import Card from '../component/Card'

export default function SecondPage() {
  return (
    <div id='SecondPage' className='mb'>
        <div className="container p bg-gray">
        <Heighliter body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla id debitis vitae ea hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorum." title="Why Web Development??"/>
            <Card />
            <Card imgFirst={true}/>
            <Card />
        </div>
    </div>
  )
}
