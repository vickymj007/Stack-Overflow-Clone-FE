import React, { useEffect } from 'react'
import {formatDistanceToNow } from 'date-fns'
import {nanoid} from '@reduxjs/toolkit'
import {Link} from "react-router-dom"
import {useSelector}from 'react-redux'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setData, addViews } from '../../../redux/features/QuestionsSlice.js'


const QuestionsBody = () => {
    const {data,currentPage,contentPerPage} = useSelector(state => state.questions)
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get("http://localhost:9000/api/questions")
        .then(response => response.data)
        .then(data=> {
            dispatch(setData(data))
        })
        .catch(error=>console.log(error.message))
    },[dispatch])

    const incViews = (id)=>{
        axios.put(`http://localhost:9000/api/questions/${id}`,{
            addViews:true,
            type:"ques"
        })
        .then(response => response.data)
        .then(data=>{
            dispatch(addViews({id}))
        })
        .catch(error=>console.log(error))
    }


    const renderData = !data? "Loading": data.slice(contentPerPage * currentPage, contentPerPage*currentPage+contentPerPage).map((data,index)=>(
        <div key={index} className='question-card'>
            <div className='question-stats'>
                <p>{data.votes} votes</p>
                <p>{data.answers.length} answers</p>
                <p>{data.views} views</p>
            </div>
            <div className='question-info'>
                <Link onClick={()=>incViews(data._id)} to={`/questions/info/${data._id}`}>{data.title}</Link>
                <p>{data.question.substring(1,193)}</p>
                <div>
                    <div>
                        {data.tags.map(tag=>(<p key={nanoid()}>{tag}</p>))}
                    </div>
                    <p>by <strong>{data.askedBy.name} </strong>
                    {formatDistanceToNow(new Date(data.createdAt),{addSuffix:true,includeSeconds:true})}</p>
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