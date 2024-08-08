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
import User from "./Components/User"
import Shop from "./Components/Shop";
import Crop from "./Components/Crop";
import Cropbuy from "./Components/Cropbuy";
import Fertilizers from './Components/fertilizers';
import Pesticides from './Components/Pesticides';
// import Description from './Components/Description';



function App() {
  return (
    <>
   

    <div className="App">
    <Header/>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/Home2' element={<Home2/>}/> */}
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/contact' element={ <Contact/>}/>
        <Route path='/User' element={ <User />}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Crop' element={<Crop/>}/>
        <Route path='/Cropbuy' element={<Cropbuy/>}/>
        <Route path='/Fertilizers/:id' element={<Fertilizers/>}/>
        <Route path='/Pesticides/:id' element={<Pesticides/>}/>  <Route path="/crops/:soilType/:landSize/:season" component={Crop} />
        {/* <Route path='/Description' element={<Description/>}/> */}
        </Routes>
      
      </BrowserRouter>
       <Footer/>
      
    </div>
    </>
  );
}

export default App;
