import React from "react";
import BoxList from './BoxList';
import '../Styles/Home2.css' ;
import {useNavigate} from 'react-router-dom';

const Home2=() =>
{
    const imageSrc="./images/Home.png" ;
    const text=" Cultivate   your     Farm   Potential";
    const buttonText="CLICK HERE" ;
    const Img="./images/Agri.png";
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/User'); // Navigate to the next page
      };
    return(
        <>
        <div className="homepage2">
        <div className="image-container" >
            <img src={imageSrc} alt="Home" className="background-image" />
            <h5 className="text">{text}</h5>
            <button className="styled-button" onClick={handleClick}>CLICK HERE</button>

        </div>
        <div className="image-container">
            <img src={Img} alt="Farmer" className="Agri-container" />
            <h4 className="text1 text-danger">LEARN ABOUT THE AGRICULTURE</h4>
            <br></br>
            <br></br>
            <br></br>
            <p className="phara">"Agriculture not only gives riches to a nation
            <br></br>
          nation ,but the only riches she
            <br></br>
         can call her own "</p>
            
          

        </div> 
             <BoxList /> 
             </div>
        </>
       
    );
};

export default Home2;