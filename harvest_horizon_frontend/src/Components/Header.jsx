import React from 'react'
import '../Styles/header.css'


const Header = () => {
  return (
    <>
   
    {/* <div className="navbar"> */}
        <div className="container">
                
           <nav>
           <img className="log" src="images/logo.jpg" />  
            <div className="naving">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/Shop">Store</a>
                <a href="/contact">Contact</a>
               
            </div>
            <div className="but1">
                <a href="/Login">login</a>  
                 {/* <img className="user" src="images/user.png" />  */}       
            </div>
           
           </nav>
        </div>
    {/* </div> */}
    <div className="container2">
        <h1>HARVEST HORIZON</h1>
        <div className="but2">
            <a href="/Shop" >SHOP</a>
            </div>
    </div>
    </>
  )
}

export default Header;