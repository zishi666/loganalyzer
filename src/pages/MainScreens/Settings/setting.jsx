import React from 'react';
import { Outlet } from "react-router-dom";
import { SettingsRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Setting.css';

const settingPage = () => {
  return (
    <>
    <div>Setting</div>
    <MainPagesNavbar data={SettingsRoutesLinks}/>
    <div className='Section'>
         <Outlet/>
      </div>
    </>
    
  )
}

export default settingPage;