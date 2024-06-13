import React from 'react';
import { Outlet } from "react-router-dom";
import { CompilanceRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Compliance.css';

const compliancePage = () => {
  return (
    <div className='MainPage'>
      <MainPagesNavbar data={CompilanceRoutesLinks}/>
      <div className='MainPageRightSection'>
          <Outlet/>
        </div>
      </div>
  )
}

export default compliancePage;
