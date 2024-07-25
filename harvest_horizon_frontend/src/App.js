import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
       <Routes>
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='./login' element={<Login/>}/>
       </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
