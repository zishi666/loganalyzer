import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Asset/Logo.svg';
import LogoutImag from '../Asset/logout.svg';

const MainPagesNavbar = ({ data }) => {

  const [activeLink, setActiveLink] = useState(data[0][0]);

  const handleLinkClick = (event, link) => {
    setActiveLink(link);
  };

  return (
    <nav className='MainPageLeftSection'>
      <div className='upperSection'>
        <div className='logoSection'>
          <img className='Logo' src={Logo} alt="" />
          <div className='SiteName'>LOG SPECTRUM</div>
        </div>

        <div className='subLinksSection'>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <Link to={item[0]} onClick={(event) => handleLinkClick(event, item[0])}
                  className={activeLink === item[0] ? 'activeSubLink' : ''}
                  >
                    {item[1]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='lowerSection'>
        <img className='logoutIcon' src={LogoutImag} alt="" />
        <div className='logoutText'>Log Out</div>
      </div>
    </nav>
  );
}

export default MainPagesNavbar;