import React from 'react';
import { Outlet } from "react-router-dom";
import { SupportRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Support.css';

const supportPage = () => {
  return (
    <>
    <div>Support</div>
    <MainPagesNavbar data={SupportRoutesLinks}/>
    <div className='Section'>
         <Outlet/>
      </div>
    </>
    
  )
}


export default supportPage;