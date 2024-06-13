import React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../../Asset/Logo.svg';
import './signup.css';

const SignUp = () => {
 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleNameonChange = (e) => {
        setUsername(e.target.value);
  };

  const handleEmailonChange = (e) => {
    const emailError = document.getElementById('checkValidEmail');
    emailError.classList.remove('notValidEmail');
    emailError.classList.add('validEmail');
    setEmail(e.target.value);
  };

  const handlePasswordonChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPsswordonChange = (e) => {
    const errorTag = document.getElementById('errorMessage');
    errorTag.classList.remove('paswrdNotMatchError');
    errorTag.classList.add('passwordMatch');
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        const emailError = document.getElementById('checkValidEmail');
        emailError.classList.remove('validEmail');
        emailError.classList.add('notValidEmail');
        return;
    }

    if (password !== confirmpassword){
       setConfirmPassword('');
       const errorTag = document.getElementById('errorMessage');
       errorTag.classList.remove('passwordMatch');
       errorTag.classList.add('paswrdNotMatchError');
        return;
    }

  };

const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
};

const toggleconfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
}
  

  return (
    <div className='SignUpPageBody'>

                <div id='SignUpSVG'>
                
                </div>

        <div id='SignUpsideBar'>
            <div className='SignUplogoSection'>
                    <img src={Logo} alt="Logo" />
                    <div className='SignUpsiteName'>
                    Log Spectrum
                    </div>            
            </div>

            <div className='SignUpinputSection'>
                <form onSubmit={handleSubmit} id='loginForm'>

                    <div id='SignTXT'>
                        Sign up
                    </div>

                    <div className='emailInputField'>
                        <input
                        className='EMAIL'
                            type="text"
                            placeholder="Enter Your Full Name"
                            value={username}
                            onChange={handleNameonChange}
                            required
                        />
                    </div>

                    <div className='emailInputField'>
                        <input
                        className='EMAIL'
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={handleEmailonChange}
                            required
                        />
                    </div>
                    <p id='checkValidEmail' className='validEmail'>Email is not Valid</p>

                    <div className='passwordInputField'>
                        <input
                            className='pswrd'
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder="Enter Password here"
                            value={password}
                            onChange={handlePasswordonChange}
                            required
                        />
                        <i onClick={togglePasswordVisibility} >
                            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </i>
                    </div>

                    <div className='passwordInputField'>
                        <input
                            className='pswrd'
                            type={isConfirmPasswordVisible ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={confirmpassword}
                            onChange={handleConfirmPsswordonChange}
                            required
                        />
                        <i onClick={toggleconfirmPasswordVisibility} >
                            {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </i>
                    </div>


                    <p id='errorMessage' className='passwordMatch'>password didn't match</p>

                    <button type="submit">Sign up</button>

                    <div id='signupOption'>
                    Already have An Account?  <span id='signupPage' onClick={()=>{}}>Sign in!</span>
                    </div>

                </form>
            </div>
            
        </div>

    </div>
  )
}

export default SignUp;