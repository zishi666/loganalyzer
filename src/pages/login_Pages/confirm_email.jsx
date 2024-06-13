import React from 'react';
import './confirm_email.css';
import Logo from '../../Asset/Logo.svg';
import { useState } from 'react';

const ConfirmEmail = () => {
    const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    const emailError = document.getElementById('checkValidEmail');
    emailError.classList.remove('notValidEmail');
    emailError.classList.add('validEmail');
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        const emailError = document.getElementById('checkValidEmail');
        emailError.classList.remove('validEmail');
        emailError.classList.add('notValidEmail');
        return;
    }
  };

  
  return (
    <div className='EmailPageBody'>
        <div id='EmailPagesideBar'>
            <div className='emaillogoSection'>
                    <img src={Logo} alt="Logo" />
                    <div className='emailSiteName'>
                    Log Spectrum
                    </div>            
            </div>

            <div className='emailInputSection'>
                <form onSubmit={handleSubmit} id='emailLoginForm'>
                    <div id='emailSignTXT'>
                    Confirm Email
                    </div>

                    <div className='emailPageInputField'>
                        <input
                        id='EMAIL'
                            type="email"
                            placeholder="Enter your Email here"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <p id='checkValidEmail' className='validEmail'>Email is not Valid</p>
            
                    <button type="submit">Reset Password</button>
                    <div id='emailGoBackPage' onClick={()=>{}}>
                        Go Back
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default ConfirmEmail;