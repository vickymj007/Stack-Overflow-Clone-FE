import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Content/Main';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
