import React from 'react';
import { Outlet } from "react-router-dom";
import { SupportRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Support.css';

const supportPage = () => {
  return (
    <div className='MainPage'>
      <MainPagesNavbar data={SupportRoutesLinks}/>
      <div className='MainPageRightSection'>
          <Outlet/>
        </div>
    </div>
  )
}


export default supportPage;