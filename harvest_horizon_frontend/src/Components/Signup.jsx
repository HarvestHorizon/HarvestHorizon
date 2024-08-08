import React,{useState} from 'react'
import '../Styles/Signup.css'
import {useNavigate} from 'react-router-dom';
import SignupAction from '../Actions/SignupAction';


const Signup = () => {
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email_id,setEmail_id] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpass,setConfirmpass] = useState('');
    // const [gender,setGender] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    // const [state,setState] = useState('');
    // const [district,setDistrict] = useState('');
    const navigate = useNavigate();
    // const [pincode,setPincode] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log(`username: ${firstname} password: ${password}`);
        const user = await SignupAction(firstname,lastname,email_id,password, confirmpass,phonenumber);
        localStorage.setItem('user', JSON.stringify(user));

        setFirstname('');
        setLastname('');
        setEmail_id('')
        setPassword('');
        setConfirmpass('');
        setPhonenumber('');
        // setGender('');
        // setCountry('');
        // setState('');
        // setDistrict('');
        // setPincode('');
        
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
        
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
                    placeholder="Enter your firstname"
                     required/>
                </div>
                <div className='password'>
                    <label className='signuplastname'>Lastname</label>
                    <input 
                    className='signupinput'
                    value={lastname} 
                    type = 'input'
                    onChange ={(e) => setLastname(e.target.value)} 
                    placeholder="Enter your lastname"
                     required/>
                </div>
                <div className='password'>
                    <label className='signupemail'>Email</label>
                    <input 
                    className='signupinput'
                    value={email_id} 
                    type = 'input'
                    onChange ={(e) => setEmail_id(e.target.value)} 
                    placeholder="Enter your email"
                     required/>
                </div>
                <div className='password'>
                    <label className='signuppasssword'>Password : </label>
                    <input 
                    className='signupinput'
                    value={password} 
                    type = 'password'
                    onChange ={(e) => setPassword(e.target.value)} 
                    placeholder="Enter your password"
                     required/>
                </div>
                <div className='password'>
                    <label className='signupconfirmpass'>Confirm Password : </label>
                    <input 
                    className='signupinput'
                    value={confirmpass} 
                    type = 'password'
                    onChange ={(e) => setConfirmpass(e.target.value)} 
                    placeholder="Confirm your Password"
                     required/>
                </div>
                
                {/* <div className='password'>
                    <label className='signuppassword'>Gender</label>
                    <select className='genderdrop' value={gender} 
                    type = 'password'
                    onChange ={(e) => setGender(e.target.value)}
                     required>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div> */}
                <div className='password'>
                    <label className='signupcountry'>Phone number</label>
                    <input 
                    className='signupinput'
                    value={phonenumber} 
                    type = 'text'
                    onChange ={(e) => setPhonenumber(e.target.value)} 
                    placeholder="Enter your Phonenumber"
                     required/>
                </div>
                {/* <div className='password'>
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
                </div> */}
                <button onClick={handleSubmit}
                    type='submit' >Submit</button>
                <p>Already have an account ? <a className='loginlink' onClick={handleClick} href="">Login</a>
                </p>
                
            </form>
        </div>
    )
}

export default Signup;
