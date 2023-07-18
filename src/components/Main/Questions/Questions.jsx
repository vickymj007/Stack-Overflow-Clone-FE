import Features_Main from '../Features/Features_Main'
import './QuestionsPage.css'
import Questions_Body from './Questions_Body'
import Questions_Footer from './Questions_Footer'
import Questions_Header from './Questions_Header'

const Questions = () => {


  return (
    <>
      <div className='questions-page'>        
          <Questions_Header/>
          <Questions_Body/>
          <Questions_Footer/>
      </div>
      <Features_Main/>
    </>
  )
}

export default Questions