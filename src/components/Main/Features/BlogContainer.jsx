import React from 'react'
import {MdEdit} from 'react-icons/md'
import {BiMessage} from 'react-icons/bi'
import {BsStackOverflow} from 'react-icons/bs'

const Blog_Container = () => {
  return (
    <div className='blog-container'>
        <h5>The Overflow Blog</h5>
        <div>
            <span><MdEdit/></span>
            <p>How terrifying is giving a conference talk? (Ep. 589)</p>
        </div>
        <div>
            <span><MdEdit/></span>
            <p>The Overflow #186: Do large language models know what they're talking about?</p>
        </div>
        <h5>Featured on Meta</h5>
        <div>
            <span><BiMessage/></span>
            <p>Starting the Prompt Design Site: A New Home in our Stack Exchange Neighborhood</p>
        </div>
        <div>
            <span><BiMessage/></span>
            <p>Colors update: A more detailed look...</p>
        </div>
        <div>
            <span><BsStackOverflow/></span>
            <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
        </div>
        <div>
            <span><BsStackOverflow/></span>
            <p>Launching 2 new collectives: PHP and NLP</p>
        </div>
        <div>
            <span><BsStackOverflow/></span>
            <p>Conclusions from title-drafting and question-content assistance experiments...</p>
        </div>
    </div>
  )
}

export default Blog_Container