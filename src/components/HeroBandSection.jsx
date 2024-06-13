import React from 'react';
import NotificationImg from '../Asset/notification.svg';
import SearchIcon from '../Asset/searchIcon.svg';

export const HeroBandSection = (data) => {
  return (
    <div className='mainPageUpperSection'>
      <div>
          <div className='textSection'>
              {data.text}
          </div>

          <div className='searchSection'>
                <div className='searchBar'>
                          <img className='searchImg' src={SearchIcon} alt="" />
                          <input className='inputField' type="text" placeholder='Search for logs here'/>
                </div>
                <img className='notificationSection' src={NotificationImg} alt="" />
          </div>
      </div>
    </div>
  )
}
