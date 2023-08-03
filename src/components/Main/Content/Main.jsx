import BodyMain from './BodyMain'
import SideNavbar from '../Side_Navbar/SideNavbar'
import './Main.css'
import { Routes,Route } from 'react-router-dom'
import Tags from '../Tags/Tags'
import Users from '../Users/Users'
import Companies from '../Companies/Companies'
import Questions from '../Questions/Questions'
import QuestionInfo from '../Questions/QuestionInfo'
import UserInfo from '../Users/UserInfo'
import CurrentUser from '../Users/CurrentUser'
import EditCurrentUser from '../Users/EditCurrentUser'
import Activities from '../Users/Activities'
import Saves from '../Users/Saves'
import Profile from '../Users/Profile'

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
          <Route path='/users/:user_id' element={<UserInfo/>}/>
          <Route path='/current-user' element={<CurrentUser/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='activity' element={<Activities/>}/>
            <Route path='saves' element={<Saves/>}/>
            <Route path='edit/:user_id' element={<EditCurrentUser/>}/>
          </Route>
          <Route path='/companies' element={<Companies/>}/>
        </Routes>
    </div>
  )
}

export default Main