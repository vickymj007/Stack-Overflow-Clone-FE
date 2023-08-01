import React, { useRef, useState } from 'react'
import './AskQuestions.css'
import { useSelector, useDispatch } from 'react-redux'
import { addData } from '../../../redux/features/QuestionsSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'


const AskQuestionForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user}= useSelector(state=>state.user)
    const [title,setTitle]= useState('')
    const [details,setDetails]= useState('')
    const [tags,setTags]= useState('')

    const detailsRef = useRef()
    const tagsRef = useRef()

    const handleSubmit = ()=>{
        const newQuestion = {
            title,
            question:details,
            tags: tags.split(" "),
            askedBy:user,
            answers:[]
        }
        axios.post("http://localhost:9000/api/questions",newQuestion)
        .then(response => response.data)
        .then(data =>{
            if(!data){
                throw Error("Unable to add question")
            }
            dispatch(addData(data))
            navigate('/questions')
        })
        .catch(error =>{
            console.log(error);
        })
    }

    if(!user){
        return <Navigate to='/login' replace={true}/>
    }

    const handleClick = (e)=>{
        e.preventDefault()
        switch (e.target.name) {
            case "title":
                detailsRef.current.focus()
                detailsRef.current.scrollIntoView({
                block:"center", 
                behavior:"smooth"
                })
                break;
            case "details":
                tagsRef.current.focus()
                tagsRef.current.scrollIntoView({
                block:"center", 
                behavior:"smooth"
                })
            break;
            default:
                handleSubmit()
        }
    }

  return (
    <div className='ask-question-page-wrapper'>
        <div className='ask-question-page'>
            <h4>Ask a public question</h4>
            <section className='help-section'>
                <h3>Writing a good question</h3>
                <p>You're ready to ask a programming-related question and this form will help guide you through the process. Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
                <ul>Steps
                    <li>Summarize your problem in a one-line title.</li>
                    <li>Describe your problem in more detail.</li>
                    <li>Describe what you tried and what you expected to happen.</li>
                    <li>Add “tags” which help surface your question to members of the community.</li>
                    <li>Review your question and post it to the site.</li>
                </ul>
            </section>
            <fieldset>
                <form className='titile-form'>
                    <label htmlFor="title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you're asking a question to another person.</p>
                    </label>
                    <input 
                        type="text" 
                        id="title" 
                        onChange={(e)=>setTitle(e.target.value)}
                        placeholder='e.g. Is there an R function for finding the index of element in a vector?'
                    />
                    <br/>
                    <button 
                        disabled={title.length < 3} 
                        onClick={handleClick}
                        name='title'
                    >Next</button>
                </form>
            </fieldset>
            <fieldset disabled={title.length < 3}>
                <form className='details-form'>
                    <label htmlFor="details">
                        <h4>What are the details of your problem?</h4>
                        <p>Be specific and imagine you’re asking a question to another person.</p>
                    </label>
                    <textarea
                        ref={detailsRef}
                        id="details"
                        onChange={(e)=>setDetails(e.target.value)}
                    />
                    <br/>
                    <button 
                        disabled={details.length < 15} 
                        onClick={handleClick}
                        name='details'
                    >Next</button>
                </form>
            </fieldset>
            <fieldset disabled={details.length < 15}>
                <form className='tags-form'>
                    <label htmlFor="tags">
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                    </label>
                    <input 
                        ref={tagsRef}
                        type="text"
                        id="tags"
                        placeholder='e.g. css spring javascript'
                        onChange={(e)=>setTags(e.target.value)}
                    />
                    <br/>
                    <button 
                        disabled={tags.length < 3} 
                        onClick={handleClick}
                        name='tags'
                    >Post your question</button>
                </form>
            </fieldset>
        </div>
    </div>
  )
}

export default AskQuestionForm