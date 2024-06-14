import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dropIcon from '../Asset/dropDown.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [showBar, setShowBar] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleBarVisibility = () => {
    if (showBar) {
      setShowBar(false);
    }
    else{
      setShowBar(true);
    }
  };

  return (
    <>
      <header className='NavbarParentHeader'>
        <div className='LeftSizedBox'></div>

        <nav className={'AllPagesLinks ' + (showBar ? 'showMainPagesData' : '')}>
          <ul>
            <li>
              <Link
                to="/"
                className={activeLink === '/' ? 'MainPageActiveLink' : ''}
                onClick={() => handleLinkClick('/')}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/report"
                className={activeLink === '/report' ? 'MainPageActiveLink' : ''}
                onClick={() => handleLinkClick('/report')}
              >
                Report
              </Link>
            </li>
            <li>
              <Link
                to="/compliance"
                className={activeLink === '/compliance' ? 'MainPageActiveLink' : ''}
                onClick={() => handleLinkClick('/compliance')}
              >
                Compliance
              </Link>
            </li>
            <li>
              <Link
                to="/alerts"
                className={activeLink === '/alerts' ? 'MainPageActiveLink' : ''}
                onClick={() => handleLinkClick('/alerts')}
              >
                Alerts
              </Link>
            </li>
            <li>
              <Link
                to="/setting"
                className={activeLink === '/setting' ? 'MainPageActiveLink' : ''}
                onClick={() => handleLinkClick('/setting')}
              >
                Setting
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className={activeLink === '/support' ? 'MainPageActiveLink' : ''}
                onClick={() => handleLinkClick('/support')}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>

        <div className='RightSizedBox'>
          <div className='userSection'>
            <div className='userImage'></div>
            <div className='dropDown'>
              <img onClick={handleBarVisibility} src={dropIcon} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};


// MainPageActiveLink