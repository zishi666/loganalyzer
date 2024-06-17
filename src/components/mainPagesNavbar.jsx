import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Asset/Logo.svg';
import LogoutImag from '../Asset/logout.svg';
import manu from '../Asset/burgerManu.svg';

const MainPagesNavbar = ({ data, iconImag }) => {
  const navigate = useNavigate();
  const navigateToChild = () => {
    navigate('/');
  }


  const [activeLink, setActiveLink] = useState(data[0][0]);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLinkClick = (event, link) => {
    setActiveLink(link);
    handleShpwingSideBar()
  };

  const handleShpwingSideBar = () => {
     if (showSidebar) {
        setShowSidebar(false);
     }
     else{
      setShowSidebar(true);
     }
  };

  return (
    <nav className={'MainPageLeftSection ' + (showSidebar ? 'showSide' : '') }>
       <div className={"sideBarButton " + (showSidebar ? 'Move' : '')} onClick={handleShpwingSideBar}>
               <img src={manu} alt="" />
           </div>
      <div className='upperSection'>
        <div className='logoSection'>
          <img className='Logo' src={Logo} alt="" onClick={navigateToChild} />
          <div className='SiteName' onClick={navigateToChild}>LOG SPECTRUM</div>
        </div>

        <div className='subLinksSection'>
          <ul>
            {data.map((item, index) => (
              <li key={index} onClick={(event) => handleLinkClick(event, item[0])}
              className={activeLink === item[0] ? 'activeSubLink' : ''}>
                <img className='sublinkIcon' src={iconImag[index]} alt="" />
                <Link to={item[0]} 
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