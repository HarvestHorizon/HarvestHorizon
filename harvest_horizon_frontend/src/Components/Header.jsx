import React from 'react'
import '../Styles/header.css'


const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
   
    <div className="navbar" key={JSON.stringify(user)}>
        <div className="container">
                
           <nav>
           <img className="log" src="images/logo.jpg" alt='log1'/>  
            <div className="naving">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/Shop">Store</a>
                <a href="/contact">Contact</a>
               
            </div>
            {!window.location.href.toLowerCase().includes('login') && 
            <div className="but1">
                <a onClick={() => {
                  if (user) {
                    localStorage.removeItem("user");
                  }
                  window.location.href = '/login';
                }} href="#">{user ? "Logout" : "Login"}</a>
                        
            </div>
}
           
           </nav>
        </div>
    </div>
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