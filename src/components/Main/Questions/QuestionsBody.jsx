import React, { useEffect } from 'react'
import {formatDistanceToNow } from 'date-fns'
import {nanoid} from '@reduxjs/toolkit'
import {Link} from "react-router-dom"
import {useSelector}from 'react-redux'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setData, addViews } from '../../../redux/features/QuestionsSlice.js'
import {avatar} from '../Users/avatar.js'
import { URL } from '../../../url.js'


const QuestionsBody = () => {
    const {data,currentPage,contentPerPage} = useSelector(state => state.questions)
    const dispatch = useDispatch()

    useEffect(()=>{
        window.scrollTo({top:0,behavior:"smooth"})
        axios.get(`${URL}/questions`)
        .then(response => {
            dispatch(setData(response.data))
        })
        .catch(error=>console.log(error.response))

    },[dispatch])

    const incViews = (id)=>{
        axios.put(`${URL}/questions/${id}`,{
            addViews:true,
            type:"ques"
        })
        .then(response => response.data)
        .then(data=>{
            dispatch(addViews({id}))
        })
        .catch(error=>console.log(error.response.data))
    }

    

    const renderData = !data? (<div>Loading...</div>): data.slice(contentPerPage * currentPage, contentPerPage*currentPage+contentPerPage).map((question,index)=>(
        <div key={index} className='question-card'>
            <div className='question-stats'>
                <p>{question.votes} votes</p>
                <p>{question.answers.length} answers</p>
                <p>{question.views} views</p>
            </div>
            <div className='question-info'>
                <Link onClick={()=>incViews(question._id)} to={`/questions/info/${question._id}`}>{question.title}</Link>
                <p>{question.question.substring(0,193)}</p>
                <div>
                    <div>
                        {question.tags.map(tag=>(<p key={nanoid()}>{tag}</p>))}
                    </div>
                    <p><img src={avatar[question.askedBy.avatar_id+1]} alt='Avatar'/> <strong>{question.askedBy.name} </strong>
                    {formatDistanceToNow(new Date(question.createdAt),{addSuffix:true,includeSeconds:true})}</p>
                </div>
            </div>
        </div>
    ))

    return (
    <div className='questions-container'>
        {renderData}
    </div>
  )
}

export default QuestionsBody