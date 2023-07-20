import React, { useState } from 'react'
import Features_Main from '../Features/Features_Main'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi'
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios'

const QuestionInfo = () => {
  const navigate = useNavigate()

  const {question_id} = useParams()
  const {data} = useSelector(state => state.questions)
  const {user} = useSelector(state => state.user)
  const [answer,setAnswer]= useState('')

  const currentQuestion = data.find(question => question.id === question_id)

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!user){
      toast.warn("Login to submit your answer")
      navigate('/login')
      return
    }
    const newAnswer = {
      id:user.id,
      answer,
      user: user.name,
      votes:0
    }
    console.log(newAnswer);
  }
  return (
    <div className='question-info-page'>
      <div className='question-info-header'>
        <div>
          <h4>{currentQuestion.title}</h4>
          <div>
            <p>Asked Today</p>
            <p>Modified Today</p>
            <p>Viewed {currentQuestion.views}</p>
          </div>
        </div>
        <Link to='/ask-question' className='ask-questions-btn btn'>Ask Question</Link>
      </div>
      <div className='question-info-column'>
        <div className='question-info-container'>
          <div className='question-details-container'>
            <div>
              <span><BiSolidUpArrow/></span>
              <p>0</p>
              <span><BiSolidDownArrow/></span>
            </div>
            <div>
              <section>
                <p>{currentQuestion.question}</p>
              </section>
              <div className='questions-tags'>
                {currentQuestion.tags.map((tag,index)=>(
                  <p key={index+12}>{tag}</p>
                ))}
              </div>
              <div className='info-card'>
                <p>asked 26 minutes ago</p>
                <div>
                  <p>V</p>
                  <p>{currentQuestion.user_name}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>{currentQuestion.answers.length} Answer</h4>
              {currentQuestion.answers?
                <div className='answer-details-container'>
                  {currentQuestion.answers.map(ans =>(
                  <div className='answer-card'>
                    <div>
                      <span><BiSolidUpArrow/></span>
                      <p>0</p>
                      <span><BiSolidDownArrow/></span>
                    </div>
                    <div className='user-answer'>
                      <p>{ans.answer} <strong>-{ans.user}</strong> 7 minutes ago</p>
                    </div>
                  </div>
                  ))}
                </div>
                :
                <div>No Answers yet</div>
              }
          </div>
          <div className='answer-form-container'>
            <form className='answer-form' onSubmit={handleSubmit}>
              <label>Your Answer</label><br/>
              <textarea 
                value={answer}
                onChange={(e)=>setAnswer(e.target.value)}
              /><br/>
              <button 
                className='ask-questions-btn btn'
                disabled={answer.length < 10}
              >Post Your Answer</button>
              <ToastContainer/>
            </form>
          </div>
        </div>
        <Features_Main/>
      </div>
    </div>
  )
}

export default QuestionInfo