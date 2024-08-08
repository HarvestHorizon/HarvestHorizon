import React, { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:7051/api/v1/user/login', {
                email_id: username,
                password: password
            });

            if (response.status === 202) {
                console.log('Login successful:', response.data); // Debugging line
                localStorage.setItem('user', JSON.stringify(response.data));
                setTimeout(() => {
                    // navigate('/'); // Redirect to Crop page
                    window.location.href = "/";
                }, 1000);
            } else {
                setError('Login failed. Please check your username and password.');
            }
        } catch (err) {
            console.error('Login error:', err); // Debugging line
            setError('invalid User. Please try again.');
        }

        setUsername('');
        setPassword('');
    };

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/Signup'); // Navigate to the Signup page
    };

    return (
        <div className='loginbody'>
            <form className='loginbg' onSubmit={handleSubmit}>
                <div className='username'>
                    <label className='loginusername'>Username or Email</label>
                    <input
                        className='logininput'
                        value={username}
                        type='text'
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username or email"
                        required
                    />
                </div>
                <div className='password'>
                    <label className='loginpassword'>Password</label>
                    <input
                        className='logininput'
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type='submit'>Submit</button>
                <p className='loginbottom'>
                    Don't you have an account? <a className='signuplink' href="" onClick={handleClick}>Signup</a>
                </p>
                {error && <p className='loginerror'>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
