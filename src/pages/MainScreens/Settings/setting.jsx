import React from 'react';
import { Outlet } from "react-router-dom";
import { SettingsRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Setting.css';

const settingPage = () => {
  return (
    <div className='MainPage'>
      <MainPagesNavbar data={SettingsRoutesLinks}/>
      <div className='MainPageRightSection'>
          <Outlet/>
        </div>
    </div>
  )
}

export default settingPage;