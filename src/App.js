import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Content/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AskQuestionForm from './components/Main/Ask_question_form/AskQuestionForm';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './components/Auth/ForgotPassword';
import './index.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/*' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/ask-question' element={<AskQuestionForm/>}/>
        </Routes>
        <Footer/>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
