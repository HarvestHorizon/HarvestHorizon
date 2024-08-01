import React from 'react'
import '../Styles/header.css'


const Header = () => {
  return (
    <>
   
    {/* <div class="navbar"> */}
        <div class="container">
                
           <nav>
           <img class="log" src="images/logo.jpg" />  
            <div class="naving">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/Shop">Store</a>
                <a href="/contact">Contact</a>
               
            </div>
            <div class="but1">
                <a href="/Login">login</a>  
                 {/* <img class="user" src="images/user.png" />  */}       
            </div>
           
           </nav>
        </div>
    {/* </div> */}
    <div class="container2">
        <h1>HARVEST HORIZON</h1>
        <div class="but2">
            <a href="/Shop" strong>SHOP</a>
            </div>
    </div>
    </>
  )
}

export default Header