import React from 'react'
import FeaturesMain from '../Features/FeaturesMain'

const BodyMain = () => {
  return (
    <div className='main-body'>
      <div className='main-body-container'>
        <header>
          <h1>Stack Overflow Clone</h1>
          <span>Using MERN</span>
        </header>
        <div>
          <p>Welcome to the Stack Overflow Clone Fullstack project created using MERN where you can Signup and ask your Programming related Questions and also Answer previously asked questions by other users.</p>
        </div>
        <div>
          <div>
            <h3>Frontend</h3>
            <p>The Frontend part is created using ReactJS, React Router and React Redux for state management.</p>
          </div>
          <div>
            <h3>Backend</h3>
            <p>The Backend part is created using NodeJS and ExpressJS.</p>
          </div>
          <div>
            <h3>Database</h3>
            <p>MongoDB and Mongoose were used to create and store data</p>
          </div>
        </div>
      </div>
       <FeaturesMain/>
    </div>
  )
}

export default BodyMain