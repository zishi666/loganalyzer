import React from 'react';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import { Outlet } from "react-router-dom";
import './Dashboard .css';
import { DashboardRoutesLink, DashboradIconsData } from '../../../components/SubpagesRoutes';

const dashboardPage = () => {
  return (
    <div className='MainPage'>
      <MainPagesNavbar data={DashboardRoutesLink} iconImag={DashboradIconsData}/>
      <div className='MainPageRightSection'>
         <Outlet/>
      </div>
    </div>
    
  )
}

export default dashboardPage;