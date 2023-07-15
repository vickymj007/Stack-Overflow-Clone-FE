import React from 'react'
import Content from './Content'
import Features_Main from '../Features/Features_Main'

const Body_Main = () => {
  return (
    <div className='main-body'>
      <div className='main-body-container'>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
      </div>
      <div className='main-features-container'>
        <Features_Main/>
      </div>
    </div>
  )
}

export default Body_Main