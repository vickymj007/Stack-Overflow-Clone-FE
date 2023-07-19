import React from 'react'
import {formatDistanceToNow } from 'date-fns'
import {nanoid} from '@reduxjs/toolkit'
import {Link} from "react-router-dom"
import {useSelector}from 'react-redux'

const Questions_Body = () => {
    const date =(date) => formatDistanceToNow(new Date(date),{addSuffix:true,includeSeconds:true})
    const {data,currentPage,contentPerPage} = useSelector(state => state.questions)

    const renderData = data.slice(contentPerPage * currentPage, contentPerPage*currentPage+contentPerPage).map((data,index)=>(
        <div key={index} className='question-card'>
            <div className='question-stats'>
                <p>{data.votes} votes</p>
                <p>{data.answers.length} answers</p>
                <p>{data.views} views</p>
            </div>
            <div className='question-info'>
                <Link to={`/questions/info/${data.id}`}>{data.title}</Link>
                <p>{data.question.substring(1,193)}</p>
                <div>
                    <div>
                        {data.tags.map(tag=>(<p key={nanoid()}>{tag}</p>))}
                    </div>
                    <p>by <strong>{data.user_name} </strong>
                    {date(data.createdAt)}</p>
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

export default Questions_Body