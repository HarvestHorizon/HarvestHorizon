import './App.css';
import Header from './Components/Header';
import About from './Components/About'
import Responsibility from './Components/Responsibility'
import Footer from './Components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home' ;
import Contact from './Components/contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
       <Routes>
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/login' element={<Login/>}/>
       <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={ <About/>}/>
        <Route path='/contact' element={ <Contact/>}/>
       </Routes>
      
      </BrowserRouter>
       <Footer/>
      
    </div>
  );
}

export default App;
