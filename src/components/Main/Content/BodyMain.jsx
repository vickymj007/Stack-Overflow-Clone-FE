import React from 'react'
import FeaturesMain from '../Features/FeaturesMain'

const BodyMain = () => {
  return (
    <div className='main-body'>
      <div className='main-body-container'>
        <header>
          <h1>Stack Overflow Clone</h1>
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
        <div>
          <h3>Project Description</h3>
          <ul>
            <li>Anyone can view the home page and questions page but user need to login or signup inorder to ask a new question or to answer a previously asked question.</li>
            <li>If a user is trying to ask a question without loggin in, user will be redirected to the login page.</li>
            <li>Once a user has created an account, user data will be stored in the database.</li>
            <li>User can edit their profile by clicking the profile icon in the Navbar.</li>
            <li>User can logout by clicking the hamburger menu in the navbar.</li>
            <li>User can change their password by clicking the Forgot Password link, Server will send a OTP to the registered email address.</li>
            <li>User can use the side nav bar to navigate to different routes.</li>
            <li>User can add votes to the questions and answers, question views will be incremented everytime when the user clicks or navigate to the question info page.</li>
            <li>Once user visits the questions page, a GET request will be sent to the server, Server will send a JSON data as a response which will be then saved in the Redux Store.</li>
          </ul>
          <h4>***Some Routes and Functions are not yet completed, Iam still working on this project***</h4>
        </div>
      </div>
       <FeaturesMain/>
    </div>
  )
}

export default BodyMain