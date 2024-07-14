import React from 'react'
import CardBody from '../subcomponent/CardBody'
import CardImg from '../subcomponent/CardImg'

export default function Card({imgFirst}) {

    if(imgFirst){
        return (
            <div className="card gb-gradiant-right">
                <CardImg img="./assets/Layer_1.png"/>
                <CardBody title="I will Do Coding and Change The World"  body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quia eum aperiam reprehenderit molestias corrupti!"/>
    </div>
        )
    }

  return (
    <div className="card gb-gradiant-left">
                
                <CardBody title="I will Do Coding and Change The World"  body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quia eum aperiam reprehenderit molestias corrupti!"/>
                <CardImg img="./assets/Layer_1.png"/>
    </div>
  )
}
