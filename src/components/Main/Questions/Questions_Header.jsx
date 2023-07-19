import { useState } from 'react'
import {BsFilter} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Questions_Header = () => {
    const [openPopup, setOpenPopup] = useState(false)
    const {data} = useSelector(state => state.questions)

  return (
    <header>
        <div className='questions-header'>
            <div>
            <h4>All Questions</h4>
            <button className='ask-questions-btn btn'>Ask Question</button>
            </div>
            <div>
            <p>{data.length} questions</p>
            <button onClick={()=>setOpenPopup(!openPopup)} className='filter-btn btn'><span><BsFilter/></span>Filter</button>
            </div>
        </div>
        <div className={`filter-popup ${openPopup && "open"}`}>
            <div className='filter-options'>
            <div>
                <h5>Filter by</h5>
                <input id='no-answers' type='radio' name='filter-by' value='no-answers'/>
                <label htmlFor='no-answers'>No Answers</label><br/>
                <input id='highest-vote' type='radio' name='filter-by' value='highest-vote'/>
                <label htmlFor='highest-vote'>Highest vote</label><br/>
            </div>
            <div>
                <h5>Sort by</h5>
                <input id='newest' type='radio' name='sort-by' value='newest'/>
                <label htmlFor='newest'>Newest</label><br/>
                <input id='oldest' type='radio' name='sort-by' value='oldest'/>
                <label htmlFor='oldest'>Oldest</label><br/>
                <input id='highest-views' type='radio' name='sort-by' value='highest-views'/>
                <label htmlFor='highest-views'>Highest views</label><br/>
                <input id='lowest-views' type='radio' name='sort-by' value='lowest-views'/>
                <label htmlFor='lowest-views' >Lowest views</label>
            </div>
            </div>
            <div className='filter-bottom'>
            <button className='ask-questions-btn btn'>Apply Filter</button>
            <button onClick={()=>setOpenPopup(!openPopup)} className='filter-btn btn'>Cancel</button>
            </div>
        </div>
    </header>
  )
}

export default Questions_Header