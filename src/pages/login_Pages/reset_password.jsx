import React from 'react';
import './reset_password.css';
import Logo from '../../Asset/Logo.svg';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);


const handlePasswordonChange = (e) => {
        setPassword(e.target.value);
    };
 
 const handleConfirmPsswordonChange = (e) => {
        const errorMessage = document.getElementById('resetPasswordNotMatched');
        errorMessage.classList.remove('resetPswrNotdMatch');
        errorMessage.classList.add('resetPswrdMatch');
        setConfirmPassword(e.target.value);
 };

 const togglePasswordVisibility = () => {
       setPasswordVisible(!isPasswordVisible);
 };

const toggleconfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
        setConfirmPassword('');
        const errorMessage = document.getElementById('resetPasswordNotMatched');
        errorMessage.classList.remove('resetPswrdMatch');
        errorMessage.classList.add('resetPswrNotdMatch');
    }

  };

  
  return (
    <div className='ResetPageBody'>
        <div id='ResetPagesideBar'>
            <div className='resetlogoSection'>
                    <img src={Logo} alt="Logo" />
                    <div className='resetSiteName'>
                    Log Spectrum
                    </div>            
            </div>

            <div className='resetInputSection'>
                
                <form onSubmit={handleSubmit} id='resetLoginForm'>
                    
                    <div id='resetSignTXT'>
                    Confirm Email
                    </div>

                    <div className='resetPasswordInputField'>
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

                    <div className='resetPasswordInputField'>
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

                    <p id='resetPasswordNotMatched' className='resetPswrdMatch'>password didn't match</p>
            
                    <button type="submit">Reset Password</button>
                    <div id='resetGoBackPage' onClick={()=>{}}>
                        Go Back
                    </div>

                </form>
            </div>
            
        </div>
    </div>
  )
}

export default ResetPassword;