import React from 'react'
import '../Styles/header.css'


const Header = () => {
  return (
    <>
    <div class="navbar">
        <div class="container">
            <div class="logo">
                <img class="log" src="images/logo.jpg" />    
            </div>
           <nav>
            <div class="naving">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Store</a>
                <a href="">Contact</a>
               
            </div>
            <div class="but1">
                <a href="">login</a>
               
            </div>
           
           </nav>
        </div>
    </div>
    <div class="container2">
        <h1>HARVEST HORIZON</h1>
        <div class="but2">
            <a href="" strong>SHOP</a>
            </div>
    </div>
    </>
  )
}

export default Header