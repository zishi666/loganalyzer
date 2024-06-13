import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll('.AllPagesLinks a');

    links.forEach(link => {
      link.classList.remove('MainPageActiveLink');
      if (link.getAttribute('href') === location.pathname) {
        link.classList.add('MainPageActiveLink');
      }

      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [location.pathname]);

  const handleLinkClick = (event) => {
    const links = document.querySelectorAll('.AllPagesLinks a');
    links.forEach(link => link.classList.remove('MainPageActiveLink'));
    event.currentTarget.classList.add('MainPageActiveLink');
  };
  return (
   <>
      <header className='NavbarParentHeader'>

        <div className='LeftSizedBox'>

        </div>

        <nav className='AllPagesLinks'>
            <ul>
                  <li><Link to="/">Dashboard</Link></li>
                  <li><Link to="report">Report</Link></li>
                  <li><Link to="compliance">Compliance</Link></li>
                  <li><Link to="alerts">Alerts</Link></li>
                  <li><Link to="setting">Setting</Link></li>
                  <li><Link to="support">Support</Link></li>
              </ul>
        </nav>

        <div className='RightSizedBox'>
            <div className='userSection'>
              <div className='userImage'>
              </div>
              <div className='dropDown'>
                  
              </div>
            </div>
        </div>
         

      </header>
   </>
  )
}
