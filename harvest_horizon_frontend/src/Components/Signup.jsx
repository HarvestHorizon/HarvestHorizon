import React,{useState} from 'react'
import '../Styles/Signup.css'
import {useNavigate} from 'react-router-dom';


const Signup = () => {
    const [firstname,setFirstname] = useState('');
    const [lastanme,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpass,setConfirmpass] = useState('');
    const [gender,setGender] = useState('');
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [district,setDistrict] = useState('');
    const navigate = useNavigate();
    const [pincode,setPincode] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(`username: ${firstname} password: ${password}`);
        setFirstname('');
        setLastname('');
        setEmail('')
        setPassword('');
        setConfirmpass('');
        setGender('');
        setCountry('');
        setState('');
        setDistrict('');
        setPincode('');
        
    };
    const handleClick = () => {
        navigate('/Login'); // Navigate to the next page
      };
    return (
        <div className='signupbody'>
            <form className='bg'>
                <div className='username'>
                    <label className='signupfirstname'>Firstname </label>
                    <input
                    className='signupinput' 
                    value={firstname} 
                    type = 'input'
                    onChange ={(e) => setFirstname(e.target.value)} 
                    placeholder="enter your firstname"
                     required/>
                </div>
                <div className='password'>
                    <label className='signuplastname'>Lastname</label>
                    <input 
                    className='signupinput'
                    value={lastanme} 
                    type = 'input'
                    onChange ={(e) => setLastname(e.target.value)} 
                    placeholder="enter your lastname"
                     required/>
                </div>
                <div className='password'>
                    <label className='signupemail'>Email</label>
                    <input 
                    className='signupinput'
                    value={email} 
                    type = 'input'
                    onChange ={(e) => setEmail(e.target.value)} 
                    placeholder="enter your email"
                     required/>
                </div>
                <div className='password'>
                    <label className='signuppasssword'>Password : </label>
                    <input 
                    className='signupinput'
                    value={password} 
                    type = 'input'
                    onChange ={(e) => setPassword(e.target.value)} 
                    placeholder="enter your password"
                     required/>
                </div>
                <div className='password'>
                    <label className='signupconfirmpass'>Confirm Password : </label>
                    <input 
                    className='signupinput'
                    value={confirmpass} 
                    type = 'input'
                    onChange ={(e) => setConfirmpass(e.target.value)} 
                    placeholder="confirm your Password"
                     required/>
                </div>
                
                <div className='password'>
                    <label className='signuppassword'>Gender</label>
                    <select className='genderdrop' value={gender} 
                    type = 'password'
                    onChange ={(e) => setGender(e.target.value)}
                     required>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>
                <div className='password'>
                    <label className='signupcountry'>Country</label>
                    <input 
                    className='signupinput'
                    value={country} 
                    type = 'password'
                    onChange ={(e) => setCountry(e.target.value)} 
                    placeholder="enter your Password"
                     required/>
                </div>
                <div className='password'>
                    <label className='signupstate'>State</label>
                    <input 
                    className='signupinput'
                    value={state} 
                    type = 'password'
                    onChange ={(e) => setState(e.target.value)} 
                    placeholder="enter your Password"
                     required/>
                </div>
                <div className='password'>
                    <label className='signupdistrict'>District</label>
                    <input 
                    className='signupinput'
                    value={district} 
                    type = 'password'
                    onChange ={(e) => setDistrict(e.target.value)} 
                    placeholder="enter your Password"
                     required/>
                </div>
                <div className='password'>
                    <label className='signuppincode'>Pincode</label>
                    <input 
                    className='signupinput'
                    value={pincode} 
                    type = 'password'
                    onChange ={(e) => setPincode(e.target.value)} 
                    placeholder="enter your Password"
                     required/>
                </div>
                <button onClick={handleSubmit} type='submit' >Submit</button>
                <p>Already have an account ? <a className='loginlink' onClick={handleClick} href="">Login</a>
                </p>
                
            </form>
        </div>
    )
}

export default Signup
