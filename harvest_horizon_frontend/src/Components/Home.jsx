import React from "react";

import BoxList from './BoxList';
import '../Styles/Home.css' ;
const Home=() =>
{
    const imageSrc="./images/Home.png" ;
    const text=" Cultivate   your     Farm   Potential";
    const buttonText="CLICK HERE" ;
    const Img="./images/Agri.png";
    return(
        <>
        <div className="image-container" >
            <img src={imageSrc} alt="Home" className="background-image" />
            <h5 className="text">{text}</h5>
            <button className="styled-button">{buttonText}</button>

        </div>
        <div className="image-container">
            <img src={Img} alt="Farmer" className="Agri-container" />
            <h4 className="text1">LEARN ABOUT THE AGRICULTURE</h4>
            <br></br>
            <br></br>
            <br></br>
            <p className="phara">"Agriculture not only gives riches to a nation</p>
            <br></br>
            <p className="phara"> nation ,but the only riches she </p>
            <br></br>
            <p className="phara">can call her own "</p>
            
            
            <button className="styled-button">LEARN MORE</button>

        </div>
        <BoxList /> 
        </>
       
    );
};

export default Home;