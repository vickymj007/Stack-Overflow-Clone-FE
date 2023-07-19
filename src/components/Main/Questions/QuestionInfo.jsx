import React from 'react'
import Features_Main from '../Features/Features_Main'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi'

const QuestionInfo = () => {
  const {question_id} = useParams()
  const {data} = useSelector(state => state.questions)

  const currentQuestion = data.find(question => question.id == question_id)

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
        <button className='ask-questions-btn btn'>Ask Question</button>
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
              <div className='user-answer'>
                <p>{currentQuestion.answers[0].answer} <strong>-{currentQuestion.answers[0].user}</strong> 7 minutes ago</p>
              </div>
            </div>
          </div>
          <div className='answer-form-container'>

          </div>
        </div>
          <Features_Main/>
      </div>
    </div>
  )
}

export default QuestionInfo