import React from 'react';
import { Outlet } from "react-router-dom";
import { SupportRoutesLinks, SupportIconsData } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Support.css';

const supportPage = () => {
  return (
    <div className='MainPage'>
      <MainPagesNavbar data={SupportRoutesLinks} iconImag={SupportIconsData}/>
      <div className='MainPageRightSection'>
          <Outlet/>
        </div>
    </div>
  )
}


export default supportPage;