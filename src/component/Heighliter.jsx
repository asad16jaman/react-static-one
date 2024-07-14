import React from 'react'

export default function 
Heighliter({body,title}) {
  return (
    <div className='heighliter'>
        <h1 className='heighliter-title text-black'>{title}</h1>
        <p className='heighliter-body text-light-gray'>{body}</p>
    </div>
  )
}
