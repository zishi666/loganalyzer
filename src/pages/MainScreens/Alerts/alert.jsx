import React from 'react';
import { Outlet } from "react-router-dom";
import { AlertsRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Alert.css';

const alertPage = () => {
  return (
    <div className='MainPage'>
      <MainPagesNavbar data={AlertsRoutesLinks}/>
      <div className='MainPageRightSection'>
          <Outlet/>
        </div>
      </div>
  )
}

export default alertPage;