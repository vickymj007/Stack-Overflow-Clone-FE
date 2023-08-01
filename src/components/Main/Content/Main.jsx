import BodyMain from './BodyMain'
import SideNavbar from '../Side_Navbar/SideNavbar'
import './Main.css'
import { Routes,Route } from 'react-router-dom'
import Tags from '../Tags/Tags'
import Users from '../Users/Users'
import Companies from '../Companies/Companies'
import Questions from '../Questions/Questions'
import QuestionInfo from '../Questions/QuestionInfo'

const Main = () => {

  return (
    <div className='main-container'>
        <SideNavbar/>
        <Routes>
          <Route path='/' element={<BodyMain/>}/>
          <Route path='/questions'>
            <Route index={true} element={<Questions/>}/>
            <Route index={false} path='info/:question_id' element={<QuestionInfo/>}/>
          </Route>
          <Route path='/tags' element={<Tags/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/companies' element={<Companies/>}/>
        </Routes>
    </div>
  )
}

export default Main