import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Content/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={<LandingPage/>}/> */}
          <Route path='/*' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
