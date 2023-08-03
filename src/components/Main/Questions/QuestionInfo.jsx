import React, { useEffect, useState } from 'react'
import FeaturesMain from '../Features/FeaturesMain'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi'
import {ToastContainer, toast} from 'react-toastify'
import { formatDistanceToNow } from 'date-fns'
import axios from 'axios'
import { avatar } from '../Users/avatar.js'
import { changeVotes, setData, updateAnswer } from '../../../redux/features/QuestionsSlice'


const QuestionInfo = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(()=>{
    axios.get("http://localhost:9000/api/questions")
    .then(response => response.data)
    .then(data=> {
        dispatch(setData(data))
    })
    .catch(error=>console.log(error.message))
},[dispatch])

  const {question_id} = useParams()
  const {data} = useSelector(state => state.questions)
  const {user} = useSelector(state => state.user)
  const [answer,setAnswer]= useState('')

  let currentQuestion = data ? data.find(question => question._id === question_id):undefined


  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!user){
      toast.warn("Login to submit your answer")
      navigate('/login')
      return
    }
    const newAnswer = {
      id: user.id,
      answer,
      votes:0,
      user: user.name
    }
    axios.patch(`http://localhost:9000/api/questions/${question_id}`,newAnswer)
    .then(response => response.data)
    .then(data=>{
      dispatch(updateAnswer({id:question_id,answer:data}))
      setAnswer("")
    })
    .catch(error =>{
      console.log(error);
    })
  }

  const handleClick = (action,type,id,ans_id)=>{
    axios.put(`http://localhost:9000/api/questions/${id}`,{
      addViews:false,
      incVote: action === "+",
      decVote: action === "-",
      type,
      ans_id
    })
    .then(response => response.data)
    .then(data=>{
      dispatch(changeVotes({
        id,
        inc:action === "+",
        type,
        ans_id
      }))
    })
    .catch(error =>console.log(error.message))
  }


  return currentQuestion ?
   (
    <div className='question-info-page'>
      <div className='question-info-header'>
        <div>
          <h4>{currentQuestion.title}</h4>
          <div>
            <p>Asked {formatDistanceToNow(new Date(currentQuestion.createdAt),{addSuffix:true})}</p>
            <p>Modified {formatDistanceToNow(new Date(currentQuestion.updatedAt),{addSuffix:true})}</p>
            <p>Viewed {currentQuestion.views}</p>
          </div>
        </div>
        <Link to='/ask-question' className='ask-questions-btn btn'>Ask Question</Link>
      </div>
      <div className='question-info-column'>
        <div className='question-info-container'>
          <div className='question-details-container'>
            <div>
              <span onClick={()=>handleClick("+", "ques",currentQuestion._id)}><BiSolidUpArrow/></span>
              <p>{currentQuestion.votes}</p>
              <span onClick={()=>handleClick("-", "ques",currentQuestion._id)}><BiSolidDownArrow/></span>
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
                <p>asked {formatDistanceToNow(new Date(currentQuestion.createdAt),{addSuffix:true})}</p>
                <div>
                  <p><img src={avatar[currentQuestion.askedBy.avatar_id]} alt='Avatar'/> {currentQuestion.askedBy.name}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>{currentQuestion.answers.length} Answer</h4>
              {currentQuestion.answers?
                <div className='answer-details-container'>
                  {currentQuestion.answers.map((ans) =>(
                  <div className='answer-card' key={ans.unique_id}>
                    <div>
                      <span onClick={()=>handleClick("+","ans",currentQuestion._id,ans.unique_id)}><BiSolidUpArrow/></span>
                      <p>{ans.votes}</p>
                      <span onClick={()=>handleClick("-","ans",currentQuestion._id,ans.unique_id)}><BiSolidDownArrow/></span>
                    </div>
                    <div className='user-answer'>
                      <p>{ans.answer} <strong>-{ans.user}</strong> {formatDistanceToNow(new Date(ans.createdAt),{addSuffix:true,includeSeconds:true})}</p>
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
        <FeaturesMain/>
      </div>
    </div>
  ):
  (
    <div style={{textAlign:"center"}}>Loading...</div>
  )
}

export default QuestionInfo