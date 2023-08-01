import React from 'react'
import Content from './Content'
import FeaturesMain from '../Features/FeaturesMain'

const BodyMain = () => {
  return (
    <div className='main-body'>
      <div className='main-body-container'>
        <Content/>
      </div>
       <FeaturesMain/>
    </div>
  )
}

export default BodyMain