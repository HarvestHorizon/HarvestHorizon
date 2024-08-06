import './App.css';
import Header from './Components/Header';
import About from './Components/About';
// import Responsibility from './Components/Responsibility'
import Footer from './Components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home' ;
import Contact from './Components/contact';
import User from "./Components/user"
import Shop from "./Components/Shop";
import Crop from "./Components/Crop";



function App() {
  return (
    <>
   

    <div className="App">
    <Header/>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/contact' element={ <Contact/>}/>
        <Route path='/user' element={ <User />}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Crop' element={<Crop/>}/>
       </Routes>
      
      </BrowserRouter>
       <Footer/>
      
    </div>
    </>
  );
}

export default App;
