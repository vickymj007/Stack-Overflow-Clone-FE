import React from 'react'
import Collectives from './Collectives'
import './Features.css'
import RelatedTags from './RelatedTags'
import BlogContainer from './BlogContainer'

const FeaturesMain = () => {
  return (
    <div className='main-features'>
      <BlogContainer/>
      <Collectives/>
      <RelatedTags/>
    </div>
  )
}

export default FeaturesMain