import React from 'react';
import { Outlet } from "react-router-dom";
import { AlertsRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Alert.css';

const alertPage = () => {
  return (
    <>
    <div>Alert</div>
    <MainPagesNavbar data={AlertsRoutesLinks}/>
    <div className='Section'>
         <Outlet/>
      </div>
    </>
    
  )
}

export default alertPage;