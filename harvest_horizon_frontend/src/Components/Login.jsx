import React from 'react'
import '../Styles/Login.css'

const Login = () => {
  return (
    <div class="bg"> 
            <div class="sign_up">
                 
                <div class="email_div">
                    <div class="enter_email"> 
                        <p class="email_text">Username</p>
                    </div>
                    <input class="email_input" type="text" placeholder="enter your username"/>
                </div>

                <div class="email_div">
                    <div class="enter_email"> 
                        <p class="email_text">Password</p>
                    </div>
                    <input class="email_input" type="password" placeholder="enter your password"/>
                </div>
                
                <button class="lbutton">
                    Login
                </button>

                <p class="email_text">Don't you have an account ?<a target="_blank" href="signup.html">Sign_up</a></p>
   
            </div>
        </div>
  )
}

export default Login