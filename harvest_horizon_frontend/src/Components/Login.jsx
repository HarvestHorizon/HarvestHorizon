import React,{useState} from 'react'
import '../Styles/Login.css'
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(`username: ${username} password: ${password}`);
        setUsername('');
        setPassword('');
    };
    const handleClick = () => {
        navigate('/Signup'); // Navigate to the next page
      };

    return (
        <div className='loginbody'>
            <form className='loginbg'>
                <div className='username'>
                    <label className='loginusername'>Usename or Email </label>
                    <input 
                    className='logininput'
                    value={username} 
                    type = 'input'
                    onChange ={(e) => setUsername(e.target.value)} 
                    placeholder="enter your usename or email"
                     required/>
                </div>
                <div className='password'>
                    <label className='loginpassword'>Password : </label>
                    <input
                    className='logininput'
                    value={password} 
                    type = 'password'
                    onChange ={(e) => setPassword(e.target.value)} 
                    placeholder="enter your Password"
                     required/>
                </div>
                <button onClick={handleSubmit} type='submit' >Submit</button>
                <p className='loginbottom'>Don't you have an account ? <a className='signuplink' onClick={handleClick} href="">Signup</a>
                </p>
                
            </form>
        </div>
    )
}

export default Login;
