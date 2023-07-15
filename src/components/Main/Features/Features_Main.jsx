import React from 'react'
import Collectives from './Collectives'
import './Features.css'
import Related_Tags from './Related_Tags'
import Blog_Container from './Blog_Container'

const Features_Main = () => {
  return (
    <div className='main-features'>
      <Blog_Container/>
      <Collectives/>
      <Related_Tags/>
    </div>
  )
}

export default Features_Main