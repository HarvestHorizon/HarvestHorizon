import React from 'react'
import '../Styles/header.css'


const Header = () => {
  return (
    <>
   
    <div class="navbar">
        <div class="container">
                
           <nav>
           <img class="log" src="images/logo.jpg" alt='log1'/>  
            <div class="naving">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/Shop">Store</a>
                <a href="/contact">Contact</a>
               
            </div>
            <div className="but1">
                <a href="/Login">login</a>  
                 <img class="user" src="images/user.png" alt='log2' />        
            </div>
           
           </nav>
        </div>
    </div>
    <div class="container2">
        <h1>HARVEST HORIZON</h1>
        <div className="but2">
            <a href="/Shop" >SHOP</a>
            </div>
    </div>
    </>
  )
}

export default Header;