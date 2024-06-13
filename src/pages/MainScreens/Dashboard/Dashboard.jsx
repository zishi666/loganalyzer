import React from 'react';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import { Outlet } from "react-router-dom";
import './Dashboard .css';
import { DashboardRoutesLink } from '../../../components/SubpagesRoutes';

const dashboardPage = () => {
  return (
    <>
      <div>Dashbord</div>
      <MainPagesNavbar data={DashboardRoutesLink}/>
      <div className='Section'>
         <Outlet/>
      </div>
    </>
    
  )
}

export default dashboardPage;