import React from 'react';
import './login.css';
import Logo from '../../Asset/Logo.svg';
import { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';

const LoginPage = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
};
  

  return (
    <div className='LoginPageBody'>
        <div id='sideBar'>
            <div className='logoSection'>
                    <img src={Logo} alt="Logo" />
                    <div className='welcomeTXT'>
                        Welcome to
                    </div>
                    <div className='siteName'>
                    Log Spectrum
                    </div>            
            </div>

            <div className='inputSection'>
                <form onSubmit={handleSubmit} id='loginForm'>
                    <div id='SignTXT'>
                        Sign in
                    </div>

                    <div className='emailInputField'>
                        <input
                        id='EMAIL'
                            type="email"
                            placeholder="Enter your Email here"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>

                    <div className='passwordInputField'>
                        <input
                            id='pswrd'
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <i onClick={togglePasswordVisibility} >
                            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </i>
                    </div>
            
                    
                    <div id='forgotTXT' onClick={()=>{}}>
                        forgot password?
                    </div>
                    <button type="submit">Sign in</button>
                    <div id='signupOption'>
                        Don't Have An Account <span id='signupPage' onClick={()=>{}}>Sign up!</span>
                    </div>
                </form>
            </div>
            
        </div>

        <div id='loginSVG'>
                
        </div>

    </div>
  )
}

export default LoginPage;